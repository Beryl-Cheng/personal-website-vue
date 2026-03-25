<template>
  <!-- 移动端菜单按钮 -->
  <button class="mobile-menu-btn" @click="toggleMenu">
    <i class="fas fa-bars"></i>
  </button>

  <!-- 左侧导航栏 -->
  <nav class="sidebar-nav" :class="{ active: menuOpen }">
    <div class="site-title">
      <h2>Blaire's World</h2>
      <p class="site-subtitle">维多利亚风格个人空间</p>
    </div>

    <ul class="main-menu">
      <li><router-link to="/" active-class="active"><i class="fas fa-home nav-icon"></i>首页</router-link></li>
      <li><router-link to="/about" active-class="active"><i class="fas fa-user nav-icon"></i>关于我</router-link></li>
      <li><router-link to="/portfolio" active-class="active"><i class="fas fa-book nav-icon"></i>作品集</router-link></li>
      <li><router-link to="/blog" active-class="active"><i class="fas fa-blog nav-icon"></i>博客</router-link></li>
      <li><router-link to="/interests" active-class="active"><i class="fas fa-heart nav-icon"></i>兴趣</router-link></li>
      <li><router-link to="/contact" active-class="active"><i class="fas fa-envelope nav-icon"></i>联系我</router-link></li>
    </ul>

    <div class="copyright">
      <p>&copy; 2025 Blaire</p>
      <p>设计灵感源自19世纪</p>
    </div>
  </nav>

  <!-- 主内容区域 -->
  <div class="main-container">
    <div class="container">
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>