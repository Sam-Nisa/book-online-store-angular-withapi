// src/app/constants/timeline.constants.ts

import { TimelineEvent } from '../types/timeline.model';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2018',
    title: 'The Idea',
    description: 'Founded by a group of friends, The Book Nook began as a small blog dedicated to sharing book reviews and literary news.',
    icon: 'flag'
  },
  {
    year: '2020',
    title: 'First Online Store',
    description: 'We launched our first e-commerce site, offering a small, curated selection of our favorite independent press titles.',
    icon: 'storefront'
  },
  {
    year: '2022',
    title: '10,000 Customers',
    description: 'Our community grew beyond our wildest dreams. We celebrated our 10,000th customer and expanded our catalog significantly.',
    icon: 'celebration'
  },
  {
    year: 'Today',
    title: 'Looking Forward',
    description: 'We continue to grow, guided by our love for books and the community we’ve built. The next chapter is yet to be written!',
    icon: 'rocket_launch'
  }
];
