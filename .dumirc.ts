import {defineConfig} from 'dumi';

export default defineConfig({
  favicons: ['https://file.xinadmin.cn/file/favicons.ico'],
  analytics: {
    baidu: 'adc452422402d1e6c2ae517dc09cb721'
  },
  locales: [
    {id: 'zh-CN', name: '中文', suffix: ''},
  ],
  themeConfig: {
    name: 'Xin Admin',
    lastUpdated: true,
    nav: {
      'zh-CN': [
        {
          title: '介绍',
          link: '/introduce/introduce',
        },
        {
          title: '文档',
          link: '/doc/dev',
        },
        {
          title: '开发技巧',
          link: '/skill',
        },
        {
          title: 'Api文档',
          link: 'https://demo.xinadmin.cn/docs.html',
        },
        {
          title: '更新日志',
          link: '/changelog',
        },
      ],
    },
    logo: 'https://file.xinadmin.cn/file/favicons.ico',
    footer: 'Made with ❤️ by <a href="https://xineny.cn/" target="_blank">小刘同学</a> | <a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备19035466号-1</a>',
    github: 'https://github.com/Xineny-liu/xinadmin',
    title: 'Xin Admin',
    docVersions: {
      ['1.1.2']: ''
    },
    footerLinks: [
      {
        title: '相关资源',
        items: [
          {
            title: '小刘同学',
            description: '开发作者',
            url: 'https://xineny.cn/',
            openExternal: true
          },
          {
            title: 'Think PHP',
            description: '敏捷后台PHP框架',
            url: 'https://www.thinkphp.cn/',
            openExternal: true
          },
          {
            title: 'Ant Design',
            description: 'React UI 组件库',
            url: 'https://ant.design',
            openExternal: true
          },
          {
            title: 'Umi',
            description: 'React 应用开发框架',
            url: 'https://umijs.org',
            openExternal: true
          },
          {
            title: 'Dumi',
            description: '为组件研发而生的静态站点框架',
            url: 'https://d.umijs.org/',
            openExternal: true
          },
          {
            title: 'Build Admin',
            description: 'Vue + TP 优秀的开发框架',
            url: 'https://buildadmin.com/',
            openExternal: true
          }
        ]
      },
      {
        title: '帮助',
        items: [
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181695-b05fa72a-4ab5-479d-bb74-3d723755de47.png',
            title: 'GitHub',
            url: 'https://github.com/xiaoliu978/Xin-Admin',
            openExternal: true
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181710-8e63ee99-ed71-4ee6-8507-d5ffac02ca51.png',
            title: '更新日志',
            url: '/changelog'
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181680-3b031d0f-1c51-48d2-a676-b2f82aa23e09.png',
            title: '报告 Bug',
            url: 'https://github.com/xiaoliu978/Xin-Admin/issues/new',
            openExternal: true
          },
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181701-b51d6a6f-3190-4525-80d0-43ac194437c9.png',
            title: '议题',
            url: 'https://github.com/xiaoliu978/Xin-Admin/issues',
            openExternal: true
          }
        ]
      },
      {
        title: '更多产品',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        items: [
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
            title: 'Xin Cms',
            url: '',
            description: '即将发布',
            openExternal: true
          },
        ]
      }
    ],
    moreLinks: [
      {
        text: '官网',
        link: 'https://xinadmin.cn'
      },
      {
        text: '演示站',
        link: 'https://demo.xinadmin.cn'
      }
    ],
  },
})
