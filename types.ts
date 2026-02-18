export type Category = 'All' | 'Surveys' | 'OfferWalls';

export interface Offer {
  id: string;
  title: string;
  provider: string;
  reward: number;
  image: string;
  rating: number;
  type: Category;
  tags?: string[];
}

export interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface LiveFeedItem {
  user: string;
  action: string;
  reward: number;
  time: string;
  avatar: string;
}