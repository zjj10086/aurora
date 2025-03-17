console.log('这里面随便写自定义js脚本')
// custom.js

// 确保路由在 hash 变化时正确跳转
window.addEventListener('hashchange', function() {
    const hash = window.location.hash  '#/home';
    handleRoute(hash);
});

// 页面加载时初始化路由
document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash  '#/home';
    handleRoute(hash);
});

function handleRoute(hash) {
    if (hash === '#/home') {
        // 跳转到 home 页面的逻辑
        window.location.href = 'home.html';
    }
    // 其他路由处理
}
