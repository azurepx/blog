import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const site = {
  name: 'Azure',
  url: 'azurepx.com',
  description: ``
}

const config: Config = {
  title: site.name,
  tagline: 'MtF, she/her',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${site.url}`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'azurepx', // Usually your GitHub org/user name.
  projectName: site.name, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        // docs: {
        //   sidebarPath: './sidebars.ts',
        //   showLastUpdateTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: `${site.name}`,
      logo: {
        alt: `Azure's Logo`,
        src: 'img/logo.svg',
      },
      items: [
        // {to: '/', label: 'Blog', position: 'left'},
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {
          href: 'https://github.com/azurepx/blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            // {
            //   label: 'Tutorial',
            //   to: '/docs/intro',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/azurepx'
            },
            {
              label: 'Juejin',
              href: 'https://juejin.cn/user/4251147222122916'
            },
            {
              label: 'Dev',
              href: 'https://dev.to/azurep'
            },
            {
              label: 'X',
              href: 'https://twitter.com/azureppx'
            },
            {
              label: 'MtF Hub',
              href: 'https://hub.mtf.party'
            },
          ],
        },
        {
          title: 'Tool',
          items: [
            {
              label: 'MtF Wiki',
              href: 'https://mtf.wiki'
            },
            {
              label: '2345 LGBT',
              href: 'https://2345.lgbt/zh-cn/'
            },
            {
              label: 'Gender Dysphoria Bible',
              href: 'https://genderdysphoria.fyi'
            },
            {
              label: 'Hormone Converter',
              href: 'https://mtf.wiki/zh-cn/converter/'
            },
            {
              label: 'Cup Calculator',
              href: 'https://mtf.wiki/zh-cn/cup-calculator/'
            },
          ],
        },
      ],
      copyright: `Copyright © 2017 - ${new Date().getFullYear()} ${site.name}. Built with ❤️.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
