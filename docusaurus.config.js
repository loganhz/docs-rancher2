const sidebars = require('./sidebars');
const metadata = require('./metadata');

module.exports = {
  title: 'Rancher 2.x',
  tagline: 'Run Kubernetes Everywhere',
  baseUrl: '/',
  url: 'https://www.rancher.cn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Rancher 2.x',
      logo: {
        alt: 'Rancher Logo',
        src: 'img/rancher-logo-cow-white.svg'
      },
      links: [
        {
          href: 'https://docs.rancher.cn/',
          label: 'RKE',
          position: 'left'
        },
        {
          href: 'https://docs.rancher.cn/',
          label: 'K3s',
          position: 'left'
        },
        {
          href: 'https://docs.rancher.cn/',
          label: 'Longhorn',
          position: 'left'
        },
        {
          href: 'https://docs.rancher.cn/',
          label: '文档中心',
          position: 'left'
        },
        {
          href:
            'https://rancher.com/support-maintenance-terms/all-supported-versions/',
          label: '支持矩阵',
          position: 'left'
        },
        { to: 'pdf', label: '获取 PDF 文档', position: 'right' },
        {
          href: 'https://www.rancher.cn/weixin/',
          label: '微信交流群',
          position: 'right'
        },
        {
          href: 'https://www.rancher.cn/support/',
          label: '技术支持',
          position: 'right'
        }
      ]
    },
    algolia: {
      apiKey: 'f790c2168867f49bb212aee8c224116d',
      indexName: 'rancher'
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Rancher Labs, Inc. All Rights Reserved. 粤ICP备16086305号`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/cnrancher/docs-rancher2/edit/dev/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  customFields: {
    sidebars,
    metadata,
    stable: '版本说明 - v2.3.6',
    baseCommit: 'b9fac34736609764c47636f5e20f81441e3698e5 - Apr 11, 2020'
  }
};
