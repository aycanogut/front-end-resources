import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'Frontend Resources',
  },
  links: [
    {
      text: 'Resources',
      url: '/resources',
      active: 'nested-url',
    },
  ],
};
