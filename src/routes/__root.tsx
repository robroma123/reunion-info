import {
  createRootRoute,
  Outlet,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Reunion Costa Rica | Retreat Hosting Information',
      },
      {
        property: 'og:title',
        content: 'Reunion Costa Rica | Retreat Hosting Information',
      },
      {
        property: 'og:description',
        content: 'An independent resource for IPI graduates and friends exploring retreat hosting at Reunion Wellness Resort, Sugar Beach, Costa Rica.',
      },
      {
        property: 'og:image',
        content: 'https://retreats.robromano.com/reunion_preview_tight.jpg',
      },
      {
        property: 'og:url',
        content: 'https://retreats.robromano.com/',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:image',
        content: 'https://retreats.robromano.com/reunion_preview_tight.jpg',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
    ],
  }),

  component: () => (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
})