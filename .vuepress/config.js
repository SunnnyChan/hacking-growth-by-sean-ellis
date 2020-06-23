// .vuepress/config.js
module.exports = {
  title: '冒号课堂',  // 设置网站标题
  description : "",
  base : '/hacking-growth-by-sean-ellis/',
  themeConfig: {
    nav : [
        { text: 'Github', link: 'http://www.github.com/sunnnychan' }
    ],
    sidebar: [
      {
        title: '知识要点',   // 必要的
        path: '/notes/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '增长案例',   // 必要的
        path: '/cases/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      }
    ]
  }
}
