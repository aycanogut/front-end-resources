import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'My App',
  },
  links: [
    {
      text: 'Respources',
      url: '/resources',
      active: 'nested-url',
    },
  ],
};
