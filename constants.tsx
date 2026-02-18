import { LayoutGrid, FileText, Target, Gift, Wallet, Trophy, Users, Star, MessageCircle } from 'lucide-react';
import { Offer, NavItem, LiveFeedItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Earn', href: '#earn', icon: Gift },
  { label: 'Withdraw', href: '#withdraw', icon: Wallet },
  { label: 'Leaderboard', href: '#leaderboard', icon: Trophy },
  { label: 'Affiliates', href: '#affiliates', icon: Users },
  { label: 'Live Chat', href: '#chat', icon: MessageCircle },
];

export const OFFERS: Offer[] = [
  // Surveys
  {
    id: 's1',
    title: 'CPX Research',
    provider: 'Top Rated',
    reward: 4500,
    image: 'https://ui-avatars.com/api/?name=CPX&background=0284c7&color=fff&size=512&font-size=0.33&bold=true',
    rating: 4.9,
    type: 'Surveys',
    tags: ['Hot', 'Instant']
  },
  {
    id: 's2',
    title: 'BitLabs',
    provider: 'High Paying',
    reward: 3200,
    image: 'https://ui-avatars.com/api/?name=Bit&background=4f46e5&color=fff&size=512&font-size=0.33&bold=true',
    rating: 4.7,
    type: 'Surveys',
    tags: ['Featured']
  },
  {
    id: 's3',
    title: 'Pollfish',
    provider: 'Fast',
    reward: 850,
    image: 'https://ui-avatars.com/api/?name=Poll&background=ef4444&color=fff&size=512&font-size=0.33&bold=true',
    rating: 4.5,
    type: 'Surveys'
  },
  {
    id: 's4',
    title: 'YourSurveys',
    provider: 'Unlimited',
    reward: 1250,
    image: 'https://ui-avatars.com/api/?name=YS&background=f97316&color=fff&size=512&font-size=0.33&bold=true',
    rating: 4.6,
    type: 'Surveys'
  },
  // OfferWalls (Games)
  {
    id: 'g1',
    title: 'Dice Dreams',
    provider: 'SuperPlay',
    reward: 12400,
    image: 'https://play-lh.googleusercontent.com/c4sJ6g4g7h8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j',
    rating: 4.9,
    type: 'OfferWalls',
    tags: ['Action', 'Trending']
  },
  {
    id: 'g2',
    title: 'Coin Master',
    provider: 'Moon Active',
    reward: 8500,
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2g7q.jpg',
    rating: 4.8,
    type: 'OfferWalls',
    tags: ['Casual', 'Easy']
  },
  {
    id: 'g3',
    title: 'Candy Crush Saga',
    provider: 'King',
    reward: 500,
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q0c.jpg',
    rating: 4.5,
    type: 'OfferWalls',
    tags: ['Puzzle']
  },
  {
    id: 'g4',
    title: 'Monopoly GO!',
    provider: 'Scopely',
    reward: 15000,
    image: 'https://play-lh.googleusercontent.com/9-31.jpg', // Placeholder fallback or use a known good one if available, using generic backup below if this breaks
    rating: 4.8,
    type: 'OfferWalls',
    tags: ['Hot']
  },
];

// Fix for Monopoly Go image to be reliable
OFFERS[7].image = 'https://play-lh.googleusercontent.com/pC_27.jpg'; // Just a placeholder structure, let's use a real one or similar
OFFERS[7].image = 'https://images.igdb.com/igdb/image/upload/t_cover_big/co66l7.jpg'; // Monopoly Madness cover as proxy or similar

export const LIVE_FEED: LiveFeedItem[] = [
  { user: 'Alex99', action: 'completed a survey', reward: 450, time: '2m ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
  { user: 'SarahJ', action: 'played Coin Master', reward: 8500, time: '5m ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { user: 'Kratos_God', action: 'withdrew Nitro Basic', reward: 0, time: '12m ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kratos' },
  { user: 'LunaMoon', action: 'watched a video', reward: 15, time: '15m ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna' },
  { user: 'SpeedyBoi', action: 'reached Level 10', reward: 1000, time: '18m ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Speedy' },
];

export const EARNING_TIPS = [
  "Complete your profile to get matched with higher paying surveys.",
  "Check the 'Hot' tag for limited-time high reward offers.",
  "Watch videos in the background to earn passive coins.",
  "Invite friends to earn 10% of their lifetime earnings!",
  "Log in daily to maintain your streak bonus."
];