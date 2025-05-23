import type { Pronoun } from '@/lib/twitch/getUserData';
import type { HelixChatBadgeVersion } from '@twurple/api';

export interface MessageNode {
  type: string;
  id: string;
  classes?: string[];
  children?: MessageNode[];
  text?: string;
  attribs?: Record<string, string>;
}

export interface Message {
  channelId: string;
  date: Date;
  id: string;
  emoteOffsets: Map<string, string[]>;
  isCheer: boolean;
  isFirst: boolean;
  isHighlight: boolean;
  isRedemption: boolean;
  isReply: boolean;
  isReturningChatter: boolean;
  message: MessageNode;
  parentMessageId: string | null;
  parentMessageText: string | null;
  rewardId: string | null;
  userInfo: {
    avatarUrl?: string;
    badgeInfo: Map<string, string>;
    badges: HelixChatBadgeVersion[];
    color: string;
    displayName: string;
    id: string;
    isArtist: boolean;
    isBroadcaster: boolean;
    isFounder: boolean;
    isMod: boolean;
    isSubscriber: boolean;
    isVip: boolean;
    userId: string;
    userName: string;
    userType?: string;
    pronoun?: Pronoun | null;
  };
  animationState?: 'entering' | 'active' | 'leaving';
}

export interface ChatPermissions {
  userName: string;
  ALLOWED_TAGS: string[];
  ALLOWED_ATTR: string[];
  FORBID_TAGS: string[];
  FORBID_ATTR: string[];
}
