import { LayoutGrid, FileText, Target, Gift, Wallet, Trophy, Users, Star } from 'lucide-react';
import { Offer, NavItem, LiveFeedItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Earn', href: '#earn', icon: Gift },
  { label: 'Withdraw', href: '#withdraw', icon: Wallet },
  { label: 'Leaderboard', href: '#leaderboard', icon: Trophy },
  { label: 'Affiliates', href: '#affiliates', icon: Users },
];

export const OFFERS: Offer[] = [
  // Surveys
  {
    id: 's1',
    title: 'Consumer Opinion Survey',
    provider: 'CPX Research',
    reward: 450,
    image: 'https://picsum.photos/seed/survey1/300/200',
    rating: 4.8,
    type: 'Surveys',
    tags: ['Hot', 'Fast']
  },
  {
    id: 's2',
    title: 'Tech Trends 2024',
    provider: 'BitLabs',
    reward: 1200,
    image: 'https://picsum.photos/seed/survey2/300/200',
    rating: 4.5,
    type: 'Surveys',
    tags: ['High Reward']
  },
  {
    id: 's3',
    title: 'Daily Feedback',
    provider: 'Pollfish',
    reward: 150,
    image: 'https://picsum.photos/seed/survey3/300/200',
    rating: 4.2,
    type: 'Surveys'
  },
  {
    id: 's4',
    title: 'Market Research',
    provider: 'YourSurveys',
    reward: 850,
    image: 'https://picsum.photos/seed/survey4/300/200',
    rating: 4.7,
    type: 'Surveys'
  },
  // Games
  {
    id: 'g1',
    title: 'Raid: Shadow Legends',
    provider: 'OfferToro',
    reward: 15000,
    image: 'https://picsum.photos/seed/game1/300/200',
    rating: 4.9,
    type: 'Games',
    tags: ['RPG', 'Install']
  },
  {
    id: 'g2',
    title: 'Coin Master',
    provider: 'AdGate',
    reward: 8500,
    image: 'https://picsum.photos/seed/game2/300/200',
    rating: 4.6,
    type: 'Games',
    tags: ['Casual']
  },
  {
    id: 'g3',
    title: 'State of Survival',
    provider: 'Lootably',
    reward: 12400,
    image: 'https://picsum.photos/seed/game3/300/200',
    rating: 4.3,
    type: 'Games'
  },
  {
    id: 'g4',
    title: 'Candy Crush',
    provider: 'AdGem',
    reward: 500,
    image: 'https://picsum.photos/seed/game4/300/200',
    rating: 4.5,
    type: 'Games'
  },
];

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