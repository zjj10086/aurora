console.log('这里面随便写自定义js脚本');

// 监听 hash 变化
window.addEventListener('hashchange', function() {
    const hash = window.location.hash || '#/home';
    handleRoute(hash);
});

// 页面加载时初始化路由
document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash || '#/home';
    handleRoute(hash);
});

function handleRoute(hash) {
    // 如果 hash 是 #/home，跳转到 home.html
    if (hash === '#/home') {
        // 防止重复跳转，确保 URL 中没有多余的 hash
        if (!window.location.pathname.includes('home.html')) {
            window.location.href = 'home.html';  // 跳转到 home 页面
        }
    }
    // 其他路由处理逻辑
    else if (hash === '#/about') {
        // 处理其他页面
        console.log('跳转到关于页面');
    }
    // 添加其他的路由逻辑...
}
