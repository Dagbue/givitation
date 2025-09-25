<template>
  <div class="forum-wrapper">
    <div class="forum-container">
      <div class="forum-content">
        <!-- Header -->
        <div class="header">
          <h2 class="header-title">{{ totalComments }} Comments</h2>
          <div class="auth-buttons">
            <span class="auth-text">Sign in with</span>
            <button class="auth-button google">G</button>
            <button class="auth-button facebook">f</button>
          </div>
        </div>

        <!-- New Comment Input -->
        <div class="comment-input-container">
          <div class="avatar">
            <User :size="20" class="avatar-icon" />
          </div>
          <div class="input-wrapper">
            <input
                v-model="newComment"
                type="text"
                placeholder="Share your Match Connecting experience..."
                class="comment-input"
                @keypress.enter="addComment"
            />
          </div>
        </div>

        <!-- Page Info -->
        <div class="page-info">
          <span>
            Showing {{ startIndex + 1 }}-{{ Math.min(endIndex, allComments.length) }} of {{ allComments.length }} discussions
          </span>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
        </div>

        <!-- Comments List -->
        <div class="comments-list">
          <CommentComponent
              v-for="comment in currentComments"
              :key="comment.id"
              :comment="comment"
              :is-reply="false"
              @toggle-reaction="toggleReaction"
              @set-replying-to="setReplyingTo"
              @add-reply="addReply"
              @toggle-replies-visibility="toggleRepliesVisibility"
              :show-replies="showReplies"
              :replying-to="replyingTo"
              :reply-text="replyText"
              @update:reply-text="setReplyText"
          />
        </div>

        <!-- Pagination -->
        <PaginationComponent
            v-if="totalPages > 1"
            :current-page="currentPage"
            :total-pages="totalPages"
            @go-to-page="goToPage"
        />

        <!-- Empty State -->
        <div v-if="allComments.length === 0" class="empty-state">
          <p class="empty-state-text">Share your Match Connecting story! Be the first to comment.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from 'vue';
import {
  Heart,
  ThumbsUp,
  MessageCircle,
  MoreHorizontal,
  User,
  Flame,
  PartyPopper,
  Clapperboard,
  Trophy,
  Smile,
  ChevronLeft,
  ChevronRight
} from 'lucide-vue-next';

const EMOJIS = ['🔥', '🎉', '👏', '❤️', '👍', '😱', '💯', '🚀'];
const REACTION_ICONS = {
  '🔥': Flame,
  '🎉': PartyPopper,
  '👏': Clapperboard,
  '❤️': Heart,
  '👍': ThumbsUp,
  '😱': Smile,
  '💯': Trophy,
  '🚀': Trophy
};

const DATING_USERS = [
  'Emma Wilson', 'Noah Adams', 'Sophie Green', 'Ethan Brown', 'Lily Turner', 'Jacob Lee', 'Ava Thompson', 'Lucas King',
  'Isabella Clark', 'Mason Harris', 'Chloe Davis', 'Liam Walker', 'Harper Moore', 'Elijah Scott', 'Amelia Young',
  'James Carter', 'Mia Phillips', 'Logan Wright', 'Zoe Parker', 'Henry Brooks', 'Grace Evans', 'Alexander Hill',
  'Charlotte Kelly', 'William Reed', 'Oliver Bennett', 'Aria Foster', 'Jack Morgan', 'Evelyn Price', 'Samuel Ward',
  'Abigail Ross', 'Scarlett Hughes', 'Daniel Murphy', 'Sophia Coleman', 'Matthew Perry', 'Emily Hayes', 'Benjamin Foster',
  'Paul Harris', 'Clara Carter', 'Victor Wright', 'Frank Miller', 'Quinn Clark', 'Mia Thomas', 'Opal Owens',
  'Yara Scott', 'Xena Xavier', 'Riley Lewis', 'Pete Parker', 'Ivy Martinez', 'Ben Baker', 'Gina Gonzalez',
  'Dan Diaz', 'Rita Ramirez', 'Sarah Mitchell', 'David Chen', 'Rachel Johnson', 'Michael Rodriguez', 'Jessica Taylor',
  'Ryan Anderson', 'Amanda White', 'Kevin Brown', 'Lauren Davis', 'Tyler Wilson', 'Natalie Garcia', 'Brandon Miller',
  'Stephanie Jones', 'Jordan Smith', 'Ashley Martinez', 'Cameron Thompson', 'Melissa Clark', 'Austin Lewis', 'Kimberly Hall'
];

const DATING_CONTENTS = [
  "Just had my first Match Connecting date! We bonded over our love for hiking. The conversation flowed so naturally. Anyone else have success stories to share?",
  "Tips for creating a standout profile on Match Connecting? I want to attract someone who shares my passion for cooking and travel.",
  "Celebrating my 3-month anniversary with someone I met on Match Connecting! We connected over our shared love of photography. This platform really works!",
  "How do you transition from online chats to real-life dates? I'm chatting with someone who loves art galleries, and I want to suggest meeting up.",
  "Best first date ideas for Match Connecting matches? We both love outdoor activities and want something memorable but not too intense.",
  "Dealing with first date nerves! Meeting my Match Connecting match this weekend at a coffee shop. Any tips for staying calm and confident?",
  "Long-distance Match Connecting relationship advice needed! We're 150 miles apart but have amazing chemistry. How do we make this work?",
  "Funny dating fail story: My Match Connecting date and I both showed up wearing the same shirt! We laughed about it all evening.",
  "What's your go-to icebreaker on Match Connecting? I'm struggling to start conversations that feel natural and engaging.",
  "Success! Just got engaged to my Match Connecting match! We met 18 months ago over our shared love of board games. Dreams do come true!",
  "Red flags to watch for on Match Connecting? I want to make sure I'm being smart about who I meet in person.",
  "How to keep the spark alive in a Match Connecting relationship? We've been together 6 months and want to keep things exciting.",
  "Profile photo tips for Match Connecting? I want pictures that show my personality while still looking attractive and approachable.",
  "Ghosting on Match Connecting - why does it happen? Had great conversations with someone who suddenly stopped responding.",
  "Planning a surprise for my Match Connecting partner! We both love music, so I got concert tickets. Any other romantic gesture ideas?",
  "How do you know when you're ready to delete your Match Connecting profile? Things are getting serious with someone I met there.",
  "Match Connecting date outfit advice? We're going to a wine tasting, and I want to look nice but not overdressed.",
  "Introducing Match Connecting partner to friends and family - when is the right time? We've been dating for 2 months.",
  "Long-term relationship goals with Match Connecting matches? How do you discuss future plans without scaring someone away?",
  "Match Connecting premium features - are they worth it? Considering upgrading to see who liked my profile.",
  "Second date ideas after a successful Match Connecting first meeting? We had coffee and want something more interactive next time.",
  "How to handle rejection on Match Connecting? Not everyone I message responds, and it's affecting my confidence.",
  "Match Connecting success rate in your experience? I'm curious about other people's statistics and stories.",
  "Video chat tips before meeting Match Connecting matches in person? Want to make sure we have chemistry before planning a date.",
  "Seasonal dating on Match Connecting - do you get more matches during certain times of year? I've noticed patterns.",
  "How to write compelling Match Connecting messages that get responses? My current approach isn't working well.",
  "Match Connecting date safety tips? Meeting someone new for the first time and want to stay safe while having fun.",
  "Hobby-based connections on Match Connecting - anyone else find better matches through shared interests rather than just photos?",
  "How to gracefully end things with a Match Connecting match? We went on a few dates but there's no spark.",
  "Match Connecting algorithm questions - does anyone understand how the matching system actually works?",
  "Building confidence for Match Connecting dates after a long relationship break? Getting back into dating feels overwhelming.",
  "Match Connecting conversation starters that actually work? Generic 'hey' messages aren't cutting it anymore.",
  "How to spot fake profiles on Match Connecting? I want to make sure I'm talking to real people with genuine intentions.",
  "Match Connecting date follow-up etiquette - how long should you wait to text after a good first date?",
  "Dealing with Match Connecting burnout - taking a break from dating apps but worried about missing out on connections.",
  "How to make your Match Connecting profile stand out in a sea of similar profiles? Need creative ideas.",
  "Match Connecting success stories from people over 30? Sometimes feel like these apps are just for younger people.",
  "How to handle different relationship goals on Match Connecting? I want something serious, but many seem to want casual.",
  "Match Connecting date location suggestions for introverts? Coffee shops feel too generic, but I don't like loud, crowded places.",
  "How to maintain multiple Match Connecting conversations without getting overwhelmed or confused?",
  "Match Connecting premium vs free - what features actually make a difference in finding quality matches?",
  "How to recover from a bad Match Connecting date experience? Last date was awful and now I'm hesitant to meet new people.",
  "Match Connecting photo editing - how much is too much? Want to look good but also be authentic.",
  "How to discuss deal-breakers early in Match Connecting conversations without seeming negative or picky?",
  "Match Connecting date ideas for winter weather? Most outdoor activities aren't feasible right now.",
  "How to tell if a Match Connecting match is genuinely interested or just being polite in conversations?",
  "Match Connecting success with niche interests? I have some unusual hobbies and wonder if I should highlight them.",
  "How to handle Match Connecting matches who want to text constantly? I prefer some space between conversations.",
  "Match Connecting date anxiety management - any techniques for staying relaxed and being yourself?",
  "How to bring up exclusivity with a Match Connecting partner? We've been dating for a month and I want to know where we stand.",
  "Match Connecting profile refresh strategies - how often should you update photos and bio information?"
];

export default {
  name: "ForumBody",
  components: {
    // Heart,
    // ThumbsUp,
    // MessageCircle,
    // MoreHorizontal,
    User,
    // Flame,
    // PartyPopper,
    // Clapperboard,
    // Trophy,
    // Smile,
    // ChevronLeft,
    // ChevronRight,
    CommentComponent: {
      props: {
        comment: Object,
        isReply: { type: Boolean, default: false },
        parentId: String,
      },
      render() {
        return h('div', { class: ['comment', this.isReply ? 'reply' : 'comment-main'] }, [
          this.comment.avatar === 'user-icon' ?
              h('div', { class: 'avatar' }, [
                h(User, { size: 20, class: 'avatar-icon' })
              ]) :
              h('img', { src: this.comment.avatar, alt: this.comment.author, class: 'avatar-img' }),
          h('div', { class: 'comment-content' }, [
            h('div', { class: 'comment-header' }, [
              h('span', { class: 'comment-author' }, this.comment.author),
              h('span', { class: 'comment-timestamp' }, this.comment.timestamp),
              h('button', { class: 'more-button' }, [
                h(MoreHorizontal, { size: 16 })
              ])
            ]),
            h('div', {
              class: 'comment-text',
              innerHTML: this.formatContentWithMentions(this.comment.content)
            }),
            h('div', { class: 'comment-actions' }, [
              ...this.comment.reactions.map((reaction, idx) => {
                const IconComponent = REACTION_ICONS[reaction.emoji] || Flame;
                return h('button', {
                  key: idx,
                  class: 'reaction-button',
                  onClick: () => this.$emit('toggle-reaction', this.comment.id, reaction.emoji, this.isReply, this.parentId)
                }, [
                  h(IconComponent, { size: 16 }),
                  h('span', { class: 'reaction-count' }, reaction.count)
                ]);
              }),
              h('button', {
                class: 'action-button',
                onClick: () => this.$emit('toggle-reaction', this.comment.id, '🔥', this.isReply, this.parentId)
              }, [
                h(Flame, { size: 16 })
              ]),
              h('button', {
                class: ['action-button', 'reply-button'],
                onClick: () => this.$emit('set-replying-to', this.comment.id)
              }, [
                h(MessageCircle, { size: 16 }),
                ' Reply'
              ])
            ]),
            !this.isReply && this.comment.replies.length > 0 && h('button', {
              class: 'toggle-replies',
              onClick: () => this.$emit('toggle-replies-visibility', this.comment.id)
            }, this.showReplies.has(this.comment.id) ? 'Hide replies' : `View ${this.comment.replies.length} replies`),
            this.replyingTo === this.comment.id && h('div', { class: 'reply-input-container' }, [
              h('div', { class: ['avatar', 'small'] }, [
                h(User, { size: 16, class: 'avatar-icon' })
              ]),
              h('div', { class: 'input-wrapper' }, [
                h('input', {
                  class: 'comment-input',
                  type: 'text',
                  placeholder: 'Write a comment...',
                  value: this.replyText,
                  onInput: (e) => this.$emit('update:reply-text', e.target.value),
                  onKeypress: (e) => e.key === 'Enter' && this.$emit('add-reply', this.comment.id)
                })
              ])
            ]),
            !this.isReply && this.showReplies.has(this.comment.id) && this.comment.replies.map(reply =>
                h('CommentComponent', {
                  key: reply.id,
                  props: {
                    comment: reply,
                    isReply: true,
                    parentId: this.comment.id,
                    showReplies: this.showReplies,
                    replyingTo: this.replyingTo,
                    replyText: this.replyText
                  },
                  on: {
                    'toggle-reaction': (id, emoji, isReply, parentId) => this.$emit('toggle-reaction', id, emoji, isReply, parentId),
                    'set-replying-to': (id) => this.$emit('set-replying-to', id),
                    'add-reply': (parentId) => this.$emit('add-reply', parentId),
                    'toggle-replies-visibility': (id) => this.$emit('toggle-replies-visibility', id),
                    'update:reply-text': (text) => this.$emit('update:reply-text', text)
                  }
                })
            )
          ])
        ]);
      },
      computed: {
        showReplies() {
          return this.$parent.showReplies;
        },
        replyingTo() {
          return this.$parent.replyingTo;
        },
        replyText() {
          return this.$parent.replyText;
        }
      },
      methods: {
        formatContentWithMentions(content) {
          return content.replace(/@(\w+)/g, '<span class="mention">@$1</span>');
        }
      }
    },
    PaginationComponent: {
      props: ['currentPage', 'totalPages'],
      render() {
        const getPageNumbers = () => {
          const pages = [];
          const maxVisible = 7;
          if (this.totalPages <= maxVisible) {
            for (let i = 1; i <= this.totalPages; i++) pages.push(i);
          } else {
            if (this.currentPage <= 4) {
              for (let i = 1; i <= 5; i++) pages.push(i);
              pages.push('...');
              pages.push(this.totalPages);
            } else if (this.currentPage >= this.totalPages - 3) {
              pages.push(1);
              pages.push('...');
              for (let i = this.totalPages - 4; i <= this.totalPages; i++) pages.push(i);
            } else {
              pages.push(1);
              pages.push('...');
              for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) pages.push(i);
              pages.push('...');
              pages.push(this.totalPages);
            }
          }
          return pages;
        };

        return h('div', { class: 'pagination' }, [
          h('button', {
            class: 'pagination-button',
            disabled: this.currentPage === 1,
            onClick: () => this.$emit('go-to-page', this.currentPage - 1)
          }, [
            h(ChevronLeft, { size: 16 }),
            ' Previous'
          ]),
          h('div', { class: 'page-numbers' }, getPageNumbers().map((page, idx) =>
              h('button', {
                key: idx,
                class: ['page-number', page === this.currentPage ? 'active' : page === '...' ? 'ellipsis' : ''],
                disabled: page === '...',
                onClick: () => typeof page === 'number' && this.$emit('go-to-page', page)
              }, page)
          )),
          h('button', {
            class: 'pagination-button',
            disabled: this.currentPage === this.totalPages,
            onClick: () => this.$emit('go-to-page', this.currentPage + 1)
          }, [
            'Next ',
            h(ChevronRight, { size: 16 })
          ])
        ]);
      }
    }
  },
  data() {
    return {
      allComments: [],
      currentPage: 1,
      newComment: '',
      replyingTo: null,
      replyText: '',
      hiddenReplies: new Set(),
      showReplies: new Set(),
      currentUser: 'You',
      showComments: false,
      COMMENTS_PER_PAGE: 15
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.allComments.length / this.COMMENTS_PER_PAGE);
    },
    startIndex() {
      return (this.currentPage - 1) * this.COMMENTS_PER_PAGE;
    },
    endIndex() {
      return this.startIndex + this.COMMENTS_PER_PAGE;
    },
    currentComments() {
      return this.allComments.slice(this.startIndex, this.endIndex);
    },
    totalComments() {
      return this.allComments.reduce((acc, comment) => acc + 1 + comment.replies.length, 0);
    }
  },
  methods: {
    generateRandomUser() {
      return DATING_USERS[Math.floor(Math.random() * DATING_USERS.length)];
    },
    generateRandomContent() {
      return DATING_CONTENTS[Math.floor(Math.random() * DATING_CONTENTS.length)];
    },
    generateReplyTimestamp(parentTimestamp) {
      const parentDate = this.parseTimestampToDate(parentTimestamp);
      const now = new Date();
      const minTime = parentDate.getTime() + 5 * 60 * 1000;
      const maxTime = Math.min(now.getTime(), parentDate.getTime() + 365 * 24 * 60 * 60 * 1000);
      const randomTime = minTime + Math.random() * (maxTime - minTime);
      const replyDate = new Date(randomTime);
      return this.formatTimestamp(replyDate);
    },
    formatTimestamp(date) {
      const now = new Date();
      const diffInMs = now.getTime() - date.getTime();
      const diffInMinutes = diffInMs / (1000 * 60);
      const diffInHours = diffInMs / (1000 * 60 * 60);
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

      if (diffInMinutes < 1) {
        return 'Just now';
      } else if (diffInMinutes < 60) {
        const minutes = Math.floor(diffInMinutes);
        return minutes <= 1 ? 'Just now' : `${minutes} minutes ago`;
      } else if (diffInHours < 24) {
        const hours = Math.floor(diffInHours);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
      } else if (diffInDays >= 1 && diffInDays < 2) {
        const hour = date.getHours();
        const minute = date.getMinutes();
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        const displayMinute = minute.toString().padStart(2, '0');
        return `Yesterday at ${displayHour}:${displayMinute} ${ampm}`;
      } else if (diffInDays < 7) {
        const days = Math.floor(diffInDays);
        return `${days} day${days > 1 ? 's' : ''} ago`;
      } else if (diffInDays < 30) {
        const weeks = Math.floor(diffInDays / 7);
        return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
      } else {
        const options = {
          month: 'long',
          day: 'numeric',
          year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
        };
        return date.toLocaleDateString('en-US', options);
      }
    },
    generateChronologicalTimestamp(index, total) {
      const now = new Date();
      const twoYearsAgo = new Date(now.getTime() - 2 * 365 * 24 * 60 * 60 * 1000);
      const totalTimeSpan = now.getTime() - twoYearsAgo.getTime();
      const timeOffset = (index / total) * totalTimeSpan;
      const commentDate = new Date(twoYearsAgo.getTime() + timeOffset);
      return this.formatTimestamp(commentDate);
    },
    generateDiverseAvatar() {
      const avatars = [
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
        'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=150'
      ];
      return avatars[Math.floor(Math.random() * avatars.length)];
    },
    generateRandomReactions() {
      const reactions = [];
      const numReactions = Math.floor(Math.random() * 4) + 1;
      for (let i = 0; i < numReactions; i++) {
        const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
        const count = Math.floor(Math.random() * 50) + 1;
        const users = Array.from({ length: count }, () => this.generateRandomUser());
        if (!reactions.some(r => r.emoji === emoji)) {
          reactions.push({ emoji, count, users });
        }
      }
      return reactions;
    },
    generateRandomReplyTimestamp() {
      const now = new Date();
      const twoYearsAgo = new Date(now.getTime() - 2 * 365 * 24 * 60 * 60 * 1000);
      const randomTime = twoYearsAgo.getTime() + Math.random() * (now.getTime() - twoYearsAgo.getTime());
      const randomDate = new Date(randomTime);
      return this.formatTimestamp(randomDate);
    },
    generateRandomComment(parentId, parentTimestamp) {
      const id = Math.random().toString(36).substr(2, 9);
      const author = this.generateRandomUser();
      let content = this.generateRandomContent();
      if (Math.random() > 0.7 && parentId) {
        const mentionUser = this.generateRandomUser();
        content = `@${mentionUser} ${content}`;
      }
      return {
        id,
        author,
        avatar: this.generateDiverseAvatar(),
        content,
        timestamp: parentTimestamp ? this.generateReplyTimestamp(parentTimestamp) : this.generateRandomReplyTimestamp(),
        reactions: this.generateRandomReactions(),
        replies: [],
        parentId
      };
    },
    parseTimestampToDate(timestamp) {
      const now = new Date();
      if (timestamp === 'Just now') return now;
      if (timestamp.includes('minutes ago')) {
        const minutes = parseInt(timestamp.split(' ')[0]);
        return new Date(now.getTime() - minutes * 60 * 1000);
      }
      if (timestamp.includes('hour')) {
        const hours = parseInt(timestamp.split(' ')[0]);
        return new Date(now.getTime() - hours * 60 * 60 * 1000);
      }
      if (timestamp.includes('day')) {
        const days = parseInt(timestamp.split(' ')[0]);
        return new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
      }
      if (timestamp.includes('week')) {
        const weeks = parseInt(timestamp.split(' ')[0]);
        return new Date(now.getTime() - weeks * 7 * 24 * 60 * 60 * 1000);
      }
      if (timestamp.includes('Yesterday')) {
        return new Date(now.getTime() - 24 * 60 * 60 * 1000);
      }
      try {
        return new Date(timestamp);
      } catch {
        return now;
      }
    },
    generateInitialComments(count) {
      const comments = [];
      for (let i = 0; i < Math.floor(count * 0.7); i++) {
        const comment = {
          ...this.generateRandomComment(),
          timestamp: this.generateChronologicalTimestamp(i, Math.floor(count * 0.7))
        };
        if (Math.random() > 0.2) {
          const numReplies = Math.floor(Math.random() * 20) + 1;
          for (let j = 0; j < numReplies; j++) {
            comment.replies.push(this.generateRandomComment(comment.id, comment.timestamp));
          }
        }
        comments.push(comment);
      }
      return comments.sort((a, b) => {
        const dateA = this.parseTimestampToDate(a.timestamp);
        const dateB = this.parseTimestampToDate(b.timestamp);
        return dateB.getTime() - dateA.getTime();
      });
    },
    formatContentWithMentions(content) {
      return content.replace(/@(\w+)/g, '<span class="mention">@$1</span>');
    },
    addComment() {
      if (!this.newComment.trim()) return;
      const now = new Date();
      const comment = {
        id: Date.now().toString(),
        author: this.currentUser,
        avatar: 'user-icon',
        content: this.newComment,
        timestamp: this.formatTimestamp(now),
        reactions: [],
        replies: []
      };
      this.allComments = [comment, ...this.allComments];
      this.newComment = '';
      this.currentPage = 1;
    },
    addReply(parentId) {
      if (!this.replyText.trim()) return;
      const now = new Date();
      const reply = {
        id: Date.now().toString(),
        author: this.currentUser,
        avatar: 'user-icon',
        content: this.replyText,
        timestamp: this.formatTimestamp(now),
        reactions: [],
        replies: [],
        parentId
      };
      this.allComments = this.allComments.map(comment => {
        if (comment.id === parentId) {
          return { ...comment, replies: [...comment.replies, reply] };
        }
        return comment;
      });
      this.replyText = '';
      this.replyingTo = null;
    },
    toggleReaction(commentId, emoji, isReply = false, parentId) {
      this.allComments = this.allComments.map(comment => {
        if (isReply && comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply => {
              if (reply.id === commentId) {
                const existingReaction = reply.reactions.find(r => r.emoji === emoji);
                if (existingReaction) {
                  return {
                    ...reply,
                    reactions: reply.reactions.map(r =>
                        r.emoji === emoji ? { ...r, count: r.count + 1 } : r
                    )
                  };
                } else {
                  return {
                    ...reply,
                    reactions: [...reply.reactions, { emoji, count: 1, users: [this.currentUser] }]
                  };
                }
              }
              return reply;
            })
          };
        } else if (comment.id === commentId) {
          const existingReaction = comment.reactions.find(r => r.emoji === emoji);
          if (existingReaction) {
            return {
              ...comment,
              reactions: comment.reactions.map(r =>
                  r.emoji === emoji ? { ...r, count: r.count + 1 } : r
              )
            };
          } else {
            return {
              ...comment,
              reactions: [...comment.reactions, { emoji, count: 1, users: [this.currentUser] }]
            };
          }
        }
        return comment;
      });
    },
    toggleRepliesVisibility(commentId) {
      const newSet = new Set(this.showReplies);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      this.showReplies = newSet;
    },
    setReplyingTo(id) {
      this.replyingTo = id;
    },
    setReplyText(text) {
      this.replyText = text;
    },
    goToPage(page) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  mounted() {
    this.allComments = this.generateInitialComments(500);
    this.interval = setInterval(() => {
      const now = new Date();
      const newComment = {
        ...this.generateRandomComment(),
        timestamp: this.formatTimestamp(now)
      };
      this.allComments = [newComment, ...this.allComments];
    }, Math.random() * 120000 + 180000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
/* General container */
.forum-wrapper {
  min-height: 100vh;
  background-color: #111827; /* bg-gray-900 */
  padding-top: 2rem; /* py-8 */
  padding-bottom: 2rem;
}
.forum-container {
  max-width: 896px; /* max-w-4xl */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem;
}
.forum-content {
  background-color: #1f2937; /* bg-gray-800 */
  border-radius: 1rem; /* rounded-2xl */
  padding: 1.5rem; /* p-6 */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* shadow-2xl */
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem; /* mb-6 */
}
.header-title {
  color: #ffffff; /* text-white */
  font-size: 1.25rem; /* text-xl */
  font-weight: 500; /* font-medium */
}
.auth-buttons {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
}
.auth-text {
  color: #9ca3af; /* text-gray-400 */
  font-size: 0.875rem; /* text-sm */
}
.auth-button {
  padding: 0.5rem; /* p-2 */
  border-radius: 9999px; /* rounded-full */
  color: #ffffff; /* text-white */
}
.auth-button.google {
  background-color: #2563eb; /* bg-blue-600 */
}
.auth-button.google:hover {
  background-color: #1d4ed8; /* hover:bg-blue-700 */
}
.auth-button.facebook {
  background-color: #1e40af; /* bg-blue-800 */
}
.auth-button.facebook:hover {
  background-color: #1e3a8a; /* hover:bg-blue-900 */
}

/* Comment input */
.comment-input-container {
  display: flex;
  gap: 0.75rem; /* gap-3 */
  margin-bottom: 2rem; /* mb-8 */
}
.avatar {
  width: 2.5rem; /* w-10 */
  height: 2.5rem; /* h-10 */
  background-color: #2563eb; /* bg-blue-600 */
  border-radius: 9999px; /* rounded-full */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; /* flex-shrink-0 */
}
.avatar.small {
  width: 2rem; /* w-8 */
  height: 2rem; /* h-8 */
}
.avatar-icon {
  color: #ffffff; /* text-white */
}
.input-wrapper {
  flex: 1; /* flex-1 */
}
.comment-input {
  width: 100%; /* w-full */
  background-color: #374151; /* bg-gray-700 */
  color: #ffffff; /* text-white */
  border-radius: 9999px; /* rounded-full */
  padding: 0.75rem 1rem; /* px-4 py-3 */
  border: none; /* no explicit border */
  outline: none; /* focus:outline-none */
}
.comment-input:focus {
  outline: 2px solid #3b82f6; /* focus:ring-2 focus:ring-blue-500 */
}

/* Page info */
.page-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem; /* mb-6 */
  color: #9ca3af; /* text-gray-400 */
  font-size: 0.875rem; /* text-sm */
}

/* Comments list */
.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* space-y-6 */
}
.comment {
  display: flex;
  gap: 0.75rem; /* gap-3 */
}
.comment-main {
  margin-bottom: 1.5rem; /* mb-6 */
}
.reply {
  margin-left: 3rem; /* ml-12 */
  margin-top: 1rem; /* mt-4 */
}
.avatar-img {
  width: 2.5rem; /* w-10 */
  height: 2.5rem; /* h-10 */
  border-radius: 9999px; /* rounded-full */
  object-fit: cover; /* object-cover */
  flex-shrink: 0; /* flex-shrink-0 */
}
.comment-content {
  flex: 1; /* flex-1 */
}
.comment-header {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
  margin-bottom: 0.25rem; /* mb-1 */
}
.comment-author {
  font-weight: 500; /* font-medium */
  color: #ffffff; /* text-white */
}
.comment-timestamp {
  color: #9ca3af; /* text-gray-400 */
  font-size: 0.875rem; /* text-sm */
}
.more-button {
  margin-left: auto; /* ml-auto */
  color: #9ca3af; /* text-gray-400 */
}
.more-button:hover {
  color: #ffffff; /* hover:text-white */
}
.comment-text {
  color: #e5e7eb; /* text-gray-200 */
  margin-bottom: 0.75rem; /* mb-3 */
  line-height: 1.625; /* leading-relaxed */
}
.comment-text .mention {
  color: #60a5fa; /* text-blue-400 */
}
.comment-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem; /* gap-3 */
  margin-bottom: 0.5rem; /* mb-2 */
}
.reaction-button {
  display: flex;
  align-items: center;
  gap: 0.25rem; /* gap-1 */
  padding: 0.25rem 0.5rem; /* px-2 py-1 */
  border-radius: 9999px; /* rounded-full */
  background-color: #1f2937; /* bg-gray-800 */
  transition: background-color 0.2s; /* transition-colors */
  font-size: 0.875rem; /* text-sm */
}
.reaction-button:hover {
  background-color: #374151; /* hover:bg-gray-700 */
}
.reaction-count {
  color: #d1d5db; /* text-gray-300 */
}
.action-button {
  color: #9ca3af; /* text-gray-400 */
}
.action-button:hover {
  color: #ffffff; /* hover:text-white */
}
.reply-button {
  display: flex;
  align-items: center;
  gap: 0.25rem; /* gap-1 */
  font-size: 0.875rem; /* text-sm */
}
.toggle-replies {
  color: #60a5fa; /* text-blue-400 */
  font-size: 0.875rem; /* text-sm */
  margin-bottom: 0.5rem; /* mb-2 */
}
.toggle-replies:hover {
  color: #93c5fd; /* hover:text-blue-300 */
}
.reply-input-container {
  display: flex;
  gap: 0.75rem; /* gap-3 */
  margin-top: 0.75rem; /* mt-3 */
}

/* Pagination */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* gap-2 */
  margin-top: 2rem; /* mt-8 */
  margin-bottom: 1rem; /* mb-4 */
}
.pagination-button {
  display: flex;
  align-items: center;
  gap: 0.25rem; /* gap-1 */
  padding: 0.5rem 0.75rem; /* px-3 py-2 */
  border-radius: 0.5rem; /* rounded-lg */
  background-color: #374151; /* bg-gray-700 */
  color: #ffffff; /* text-white */
  transition: background-color 0.2s; /* transition-colors */
}
.pagination-button:hover:not(:disabled) {
  background-color: #4b5563; /* hover:bg-gray-600 */
}
.pagination-button:disabled {
  opacity: 0.5; /* disabled:opacity-50 */
  cursor: not-allowed; /* disabled:cursor-not-allowed */
}
.page-numbers {
  display: flex;
  gap: 0.25rem; /* gap-1 */
}
.page-number {
  padding: 0.5rem 0.75rem; /* px-3 py-2 */
  border-radius: 0.5rem; /* rounded-lg */
  background-color: #374151; /* bg-gray-700 */
  color: #ffffff; /* text-white */
  transition: background-color 0.2s; /* transition-colors */
}
.page-number:hover:not(.ellipsis) {
  background-color: #4b5563; /* hover:bg-gray-600 */
}
.page-number.active {
  background-color: #2563eb; /* bg-blue-600 */
}
.page-number.ellipsis {
  color: #9ca3af; /* text-gray-400 */
  cursor: default; /* cursor-default */
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 3rem 0; /* py-12 */
}
.empty-state-text {
  color: #9ca3af; /* text-gray-400 */
  margin-bottom: 1rem; /* mb-4 */
}
</style>
