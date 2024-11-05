module.exports = ({
    lang: 'zh-CN',
    title: 'Tantanzi-ui',
    base: '/Tantanzi-ui/',
    description: '前端搬砖神器，让开发更简单✨',
    theme: '@vuepress/theme-default',
    themeConfig: {
        search: true,
        darkmode: 'disable',
        anchorDisplay: false,
        logo: '/images/logo.png',
        nav: [{
            text: '首页',
            link: '/',
        }, {
            text: '公用方法',
            link: '/function',
        }, {
            text: '组件文档',
            link: '/doc',
            items: [{
                text: 'treeTransfer 组件',
                link: '/treeTransfer/treeTransfer-doc',
            }, {
                text: 'Avue 组件',
                link: '/crud/crud-doc',
            }]
        }],
        sidebar: {
            '/treeTransfer': [
                "/treeTransfer/treeTransfer-doc",
            ],
            '/crud': [
                "/crud/crud-doc",
                "/crud/crud-object",
                "/crud/crud-page",
                "/crud/crud-search",
                "/crud/crud-head",
                "/crud/crud-row",
                "/crud/crud-column",
                "/crud/crud-dic",
                "/crud/crud-menu",
                "/crud/crud-fun",
                "/crud/crud-text",
                "/crud/crud-btn-slot",
                "/crud/crud-form",
                "/crud/crud-bind",
                "/crud/crud-grid",
                "/crud/crud-sum",
                "/crud/crud-export",
                "/crud/crud-tree",
                "/crud/crud-children",
                "/crud/crud-cell",
                "/crud/crud-permission",
                "/crud/crud-rc",
                "/crud/crud-empty",
                "/crud/crud-loading",
                "/crud/crud-sortable",
                "/crud/crud-default",
                "/crud/crud-ajax",
                "/crud/crud-cw",
                "/crud/crud-bigcousin",
                '/crud/api-crud-big',
                '/crud/api-crud-temp',
                '/crud/api-crud-fun',
            ],
        },

    },
    chainWebpack: (config) => {
        config.globalObject = 'this'
    },
    plugins: ['fulltext-search', 'demo-container', {
        name: "notice-plugin",
        globalUIComponents: ["Notice"],
    }]
})