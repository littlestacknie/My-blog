import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '不亦乐乎',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'intro',
        link: '/main/intro.md',
      }, {
        text: '前端基础',
        children: [{
          text: 'HTML',
          link: '/main/front-end/html.md',
        }, {
          text: 'CSS',
          link: '/main/front-end/css.md',
        }, {
          text: 'JS',
          link: '/main/front-end/js.md',
        }, {
          text: 'ES6',
          link: '/main/front-end/es6.md',
        }],
      }, {
        text: 'Vue',
        link: '/main/vue/vue.md',
      }, {
        text: 'React',
        link: '/main/react/react.md',
      }
    ],
  }),
})