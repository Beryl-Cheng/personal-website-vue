<template>
  <div class="ornamental-frame">
    <h1 class="page-title">联系我</h1>
    <div class="content-wrapper">
      <div class="contact-container">
        <div class="contact-info">
          <h2>联系信息</h2>
          <p>如果您对我的作品感兴趣，或有任何关于维多利亚时代文学和侦探小说的问题，请随时与我联系。我乐于讨论古典美学与现代创作的结合。</p>

          <div class="contact-details">
            <div class="contact-item">
              <h3>电子邮箱</h3>
              <p>1731314333@QQ.com</p>
            </div>

            <div class="contact-item">
              <h3>电话</h3>
              <p>132********</p>
            </div>

            <div class="contact-item">
              <h3>地址</h3>
              <p>湖北省荆州市</p>
            </div>

            <div class="contact-item">
              <h3>办公时间</h3>
              <p>周一至周五: 9:00 - 18:00</p>
              <p>周末: 仅限预约</p>
            </div>
          </div>

          <div class="social-links">
            <h3>关注我</h3>
            <div class="social-icons">
              <a href="#" class="social-link">GitHub</a>
              <a href="#" class="social-link">微博</a>
              <a href="#" class="social-link">知乎</a>
              <a href="#" class="social-link">微信公众号</a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>发送消息</h2>
          <p>请填写以下信息并发送，我会尽快回复您。</p>

          <form id="contactForm" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">姓名:</label>
              <input type="text" id="name" v-model="formData.name" required>
            </div>

            <div class="form-group">
              <label for="email">电子邮箱:</label>
              <input type="email" id="email" v-model="formData.email" required>
            </div>

            <div class="form-group">
              <label for="subject">主题:</label>
              <select id="subject" v-model="formData.subject" required>
                <option value="">请选择主题</option>
                <option value="writing-consultation">写作咨询</option>
                <option value="collaboration">合作机会</option>
                <option value="question">问题咨询</option>
                <option value="other">其他</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">消息:</label>
              <textarea id="message" v-model="formData.message" rows="5" placeholder="请详细描述您的需求或问题..." required></textarea>
            </div>

            <div class="form-group checkbox-group">
              <input type="checkbox" id="newsletter" v-model="formData.newsletter">
              <label for="newsletter">订阅我的维多利亚风格文学资讯</label>
            </div>

            <button type="submit" class="submit-btn">发送消息</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  newsletter: true
})

function handleSubmit() {
  if (!formData.name || !formData.email || !formData.message) {
    alert('请填写所有必填字段！')
    return
  }
  // 模拟发送
  alert('感谢您的消息！我会尽快回复您。')
  formData.name = ''
  formData.email = ''
  formData.subject = ''
  formData.message = ''
  formData.newsletter = true
}
</script>