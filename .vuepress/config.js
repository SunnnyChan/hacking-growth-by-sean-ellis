// .vuepress/config.js
module.exports = {
  title: '增长黑客 - 如何低成本实现爆发式增长',  // 设置网站标题
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
        children: [
          '/notes/Preface.md',
          '/notes/Introduction.md',
          '/notes/01.md',
          '/notes/02.md',
          '/notes/03.md',
          '/notes/04.md',
          '/notes/05.md',
          '/notes/06.md',
          '/notes/07.md',
          '/notes/08.md',
          '/notes/09.md',
        ]
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
