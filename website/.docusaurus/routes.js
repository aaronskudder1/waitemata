import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', 'ca4'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '98b'),
    exact: true
  },
  {
    path: '/contributing',
    component: ComponentCreator('/contributing', '720'),
    exact: true
  },
  {
    path: '/contributors',
    component: ComponentCreator('/contributors', '1d0'),
    exact: true
  },
  {
    path: '/faqs',
    component: ComponentCreator('/faqs', 'e25'),
    exact: true
  },
  {
    path: '/meetings',
    component: ComponentCreator('/meetings', '63c'),
    exact: true
  },
  {
    path: '/questionnaire',
    component: ComponentCreator('/questionnaire', 'ddc'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6c1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '63d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '19f'),
            routes: [
              {
                path: '/docs/basic/getting-started/basic_type_example',
                component: ComponentCreator('/docs/basic/getting-started/basic_type_example', '311'),
                exact: true
              },
              {
                path: '/docs/basic/getting-started/class_components',
                component: ComponentCreator('/docs/basic/getting-started/class_components', 'd95'),
                exact: true
              },
              {
                path: '/docs/basic/getting-started/concurrent',
                component: ComponentCreator('/docs/basic/getting-started/concurrent', 'dab'),
                exact: true
              },
              {
                path: '/docs/basic/getting-started/context',
                component: ComponentCreator('/docs/basic/getting-started/context', '869'),
                exact: true
              },
              {
                path: '/docs/basic/getting-started/default_props',
                component: ComponentCreator('/docs/basic/getting-started/default_props', '29f'),
                exact: true
              },
              {
                path: '/docs/basic/getting-started/error_boundaries',
                component: ComponentCreator('/docs/basic/getting-started/error_boundaries', '3af'),
                exact: true
              },
              {
                path: '/docs/basic/getting-started/forms_and_events',
                component: ComponentCreator('/docs/basic/getting-started/forms_and_events', 'ecd'),
                exact: true
              },
              {
                path: '/docs/basic/getting-started/forward_and_create_ref',
                component: ComponentCreator('/docs/basic/getting-started/forward_and_create_ref', 'f92'),
                exact: true
              },
              {
                path: '/docs/basic/getting-started/function_components',
                component: ComponentCreator('/docs/basic/getting-started/function_components', 'f60'),
                exact: true
              },
              {
                path: '/docs/basic/getting-started/history',
                component: ComponentCreator('/docs/basic/getting-started/history', '105'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/basic/getting-started/hooks',
                component: ComponentCreator('/docs/basic/getting-started/hooks', '7ce'),
                exact: true
              },
              {
                path: '/docs/basic/getting-started/meetings',
                component: ComponentCreator('/docs/basic/getting-started/meetings', '4b1'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/basic/getting-started/past-masters',
                component: ComponentCreator('/docs/basic/getting-started/past-masters', '2d8'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/basic/getting-started/patterns_by_usecase',
                component: ComponentCreator('/docs/basic/getting-started/patterns_by_usecase', '6b8'),
                exact: true
              },
              {
                path: '/docs/basic/getting-started/portals',
                component: ComponentCreator('/docs/basic/getting-started/portals', 'aaf'),
                exact: true
              },
              {
                path: '/docs/basic/setup',
                component: ComponentCreator('/docs/basic/setup', '7e3'),
                exact: true
              },
              {
                path: '/docs/reference/ComponentProps',
                component: ComponentCreator('/docs/reference/ComponentProps', '8b7'),
                exact: true
              },
              {
                path: '/docs/reference/CSSProperties',
                component: ComponentCreator('/docs/reference/CSSProperties', 'cad'),
                exact: true
              },
              {
                path: '/docs/reference/ReactNode',
                component: ComponentCreator('/docs/reference/ReactNode', '3ab'),
                exact: true
              },
              {
                path: '/docs/reference/Ref',
                component: ComponentCreator('/docs/reference/Ref', 'ec6'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
