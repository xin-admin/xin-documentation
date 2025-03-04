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
          title: 'Laravel 版文档',
          link: '/laravel/dev',
        },
        {
          title: 'Think 版文档',
          link: '/doc/dev',
        },
        {
          title: '常见问题',
          link: '/problem',
        }
      ],
    },
    sidebarGroupModePath: true,
    logo: 'https://file.xinadmin.cn/file/favicons.ico',
    footer: 'Made with ❤️ by <a href="https://xineny.cn/" target="_blank">小刘同学</a> | <a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备19035466号-1</a>',
    title: 'Xin Admin',
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
          }
        ]
      },
      {
        title: '相关项目',
        items: [
          {
            title: 'dumi-theme-antd',
            url: '',
            description: 'dumi 主题插件',
            openExternal: true
          },
        ]
      }
    ]
  },
})
