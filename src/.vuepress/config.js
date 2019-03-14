const fs = require('fs')

// 生成 siderbar 的配置
const getSiderbars=(dirs=[])=>{
  const res=dirs.reduce((total,cur)=>{
    const files = fs.readdirSync(`src/${cur}/`)
    const sidebars = files.reduce((total,cur)=>{
      if(cur!=='README.md'){
        total.push(cur.replace('.md',''))
      }
      return total
    },[])

    const key=`/${cur}/`
    total[key]=sidebars
    return total
  },{})

  return res
}

const files = fs.readdirSync('src/')
const requiredFiles = files.filter(f=>!(f.includes('.md')||f.includes('.vuepress')||f.includes('.DS_Store')))
const siderbars=getSiderbars(requiredFiles)

module.exports = {
  title: '去冲浪鸭',
  description: '踩坑总结/学习笔记/心得感悟',
  head: [
    ['link', { rel: 'icon', href: '/igroot_logo.png' }]
  ],
  base:'/blog/',
  port: 2333,
  themeConfig: {
    displayAllHeaders: true,
    repo: '',
    repoLabel: '贡献代码',
    editLinks: true,
    editLinkText: '帮助我们改进页面内容',
    lastUpdated: '上次更新',
    nav: [
      { 
        text: '主页', 
        link: '/' 
      }, {
        text: '笔记',
        link: '/knowledge/'
      }, {
        text: '工作',
        link: '/work/'
      }, {
        text: '随笔',
        link: '/essay/'
      }, {
        text: '阅读',
        link: '/read/'
      }, {
        text: '文章',
        link: '/articles/'
      }
    ],
    sidebar: siderbars,
  }
}