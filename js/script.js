// script.js - 修改以支持左侧边栏导航
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面文件名
    const currentPage = window.location.pathname.split('/').pop();
    
    // 高亮当前页面的导航链接
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
        
        // 点击链接时移除其他链接的active类
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // 在移动端点击链接后关闭菜单
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar-nav').classList.remove('active');
                const mobileBtnIcon = document.querySelector('.mobile-menu-btn i');
                if (mobileBtnIcon.classList.contains('fa-times')) {
                    mobileBtnIcon.classList.remove('fa-times');
                    mobileBtnIcon.classList.add('fa-bars');
                }
            }
        });
    });
    
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const sidebarNav = document.querySelector('.sidebar-nav');
    
    if (mobileMenuBtn && sidebarNav) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebarNav.classList.toggle('active');
            
            // 切换图标
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // 点击页面其他地方关闭菜单
        document.addEventListener('click', function(event) {
            if (!sidebarNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                sidebarNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon.classList.contains('fa-times')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // 添加维多利亚风格的交互效果
    const frames = document.querySelectorAll('.ornamental-frame');
    frames.forEach(frame => {
        frame.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(128, 0, 128, 0.5)';
        });
        
        frame.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.7)';
        });
    });
    
    // 表单提交处理
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 简单的表单验证
            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const message = this.querySelector('#message').value.trim();
            
            if (!name || !email || !message) {
                alert('请填写所有必填字段！');
                return;
            }
            
            // 模拟表单提交
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '发送中...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('感谢您的消息！我会尽快回复您。');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // 添加页面加载动画
    document.body.style.opacity = 0;
    window.addEventListener('load', function() {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = 1;
    });
    
    // 添加作品集项目的悬停效果
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderColor = '#800080';
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderColor = '#8b4513';
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 添加博客文章悬停效果
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 20px rgba(128, 0, 128, 0.3)';
        });
        
        post.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});