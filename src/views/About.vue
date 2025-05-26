<template>
  <section class="about">
    <div class="container">
      <div class="hero-section" data-aos="fade-up">
        <h1>🌐 Thư Viện Hiệu Ứng Web</h1>
        <p class="subtitle">Nơi Học Tập & Chia Sẻ Cảm Hứng Thiết Kế Giao Diện</p>
        <div class="gradient-line"></div>
      </div>

      <div class="welcome-card" data-aos="fade-up" data-aos-delay="200">
        <p>Chào mừng bạn đến với <strong>kho tàng hiệu ứng web hiện đại</strong> – nơi mọi hiệu ứng từ đơn giản đến nâng cao đều được phân loại, giải thích và minh họa rõ ràng để bạn học hỏi, thực hành và chia sẻ.</p>
      </div>

      <div class="feature-section" data-aos="fade-up" data-aos-delay="300">
        <h2><span class="emoji">🎯</span> Mục tiêu của trang này</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <font-awesome-icon icon="collection" />
            <p>Tập hợp toàn bộ các hiệu ứng phổ biến và sáng tạo nhất trong thiết kế web.</p>
          </div>
          <div class="feature-card">
            <font-awesome-icon icon="code" />
            <p>Hướng dẫn cách sử dụng bằng <strong>HTML, CSS, JavaScript</strong> hoặc thư viện hiện đại.</p>
          </div>
          <div class="feature-card">
            <font-awesome-icon icon="lightbulb" />
            <p>Khơi nguồn cảm hứng sáng tạo và giúp bạn làm chủ giao diện tương tác.</p>
          </div>
        </div>
      </div>

      <div class="effects-section" data-aos="fade-up" data-aos-delay="400">
        <h2><span class="emoji">🧩</span> Các loại hiệu ứng bạn sẽ khám phá</h2>
        <div class="effects-grid">
          <div class="effect-card" v-for="(effect, index) in effects" :key="index">
            <span class="effect-icon">{{ effect.icon }}</span>
            <h3>{{ effect.title }}</h3>
            <p>{{ effect.description }}</p>
            <div class="tech-tags">
              <span v-for="(tech, i) in effect.techs" :key="i">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="learning-section" data-aos="fade-up" data-aos-delay="500">
        <h2><span class="emoji">📘</span> Học thế nào?</h2>
        <div class="learning-steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Chi tiết từng hiệu ứng</h3>
            <p>Mã nguồn, hình ảnh minh họa, giải thích nguyên lý</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Công cụ thử trực tiếp</h3>
            <p>Sửa code & xem kết quả như CodePen</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Chia sẻ của bạn</h3>
            <p>Upload, viết lại hoặc sáng tạo hiệu ứng riêng</p>
          </div>
        </div>
      </div>

      <div class="target-section" data-aos="fade-up" data-aos-delay="600">
        <h2><span class="emoji">🧑‍💻</span> Đối tượng phù hợp</h2>
        <div class="target-cards">
          <div class="target-card">
            <font-awesome-icon icon="graduation-cap" />
            <p><strong>Học sinh, sinh viên</strong> ngành lập trình & thiết kế web đang tìm kiếm kiến thức chuyên sâu.</p>
          </div>

          <div class="target-card">
            <font-awesome-icon icon="code" />
            <p><strong>Frontend Developer</strong> mong muốn nâng cao kỹ năng giao diện và trải nghiệm người dùng.</p>
          </div>

          <div class="target-card">
            <font-awesome-icon icon="paint-brush" />
            <p><strong>Chuyên viên UI/UX</strong> và những ai quan tâm đến hiệu ứng hình ảnh, thẩm mỹ kỹ thuật số.</p>
          </div>

          <div class="target-card">
            <font-awesome-icon icon="users" />
            <p><strong>Bất kỳ ai</strong> cần cải thiện hoặc đổi mới trải nghiệm người dùng trên sản phẩm của mình.</p>
          </div>
        </div>
      </div>

      <blockquote class="inspiration" data-aos="fade-up" data-aos-delay="700">
        <p class="quote-text">🚀 Hãy bắt đầu hành trình làm chủ hiệu ứng ngay hôm nay!</p>
        <p class="highlight">"Giao diện là thứ đầu tiên người dùng nhìn thấy, và hiệu ứng là điều khiến họ ở lại."</p>
      </blockquote>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const effects = [
  {
    icon: '💫',
    title: 'Hover Effects',
    description: 'Đổi màu, scale, glow, lật thẻ, overlay...',
    techs: ['transform', 'transition', 'filter']
  },
  {
    icon: '🖱️',
    title: 'Click & Active Effects',
    description: 'Nút nhấn nhá, ripple effect, loading animation...',
    techs: ['JavaScript', 'CSS Animation']
  },
  {
    icon: '🎯',
    title: 'Focus Effects',
    description: 'Hiệu ứng khi input, button được focus',
    techs: ['CSS Outline', 'box-shadow', 'transition']
  },
  {
    icon: '✨',
    title: 'Text Effects',
    description: 'Gradient chữ, shadow, animation chữ động',
    techs: ['CSS Text-Shadow', 'background-clip', 'keyframes']
  },
  {
    icon: '🌀',
    title: 'Loading & Spinner',
    description: 'Các hiệu ứng tải trang, vòng xoay chờ',
    techs: ['CSS Animation', 'SVG', 'JavaScript']
  },
  {
    icon: '📦',
    title: 'Card & Modal Effects',
    description: 'Hiệu ứng bật/tắt modal, shadow nâng cao',
    techs: ['transform', 'opacity', 'transition']
  },
  {
    icon: '🚀',
    title: 'Scroll & Parallax',
    description: 'Hiệu ứng cuộn trang, chuyển động parallax',
    techs: ['JavaScript', 'Intersection Observer', 'CSS Transform']
  },
  {
    icon: '🎨',
    title: 'Background Effects',
    description: 'Gradient, video, hình ảnh động làm nền',
    techs: ['CSS Background', 'SVG', 'Canvas']
  },
  {
    icon: '🔔',
    title: 'Notification & Alert',
    description: 'Hiệu ứng thông báo, popup, toast',
    techs: ['JavaScript', 'CSS Animation']
  },
  {
    icon: '🔍',
    title: 'Search & Input Effects',
    description: 'Hiệu ứng tìm kiếm, placeholder động',
    techs: ['CSS Transition', 'JavaScript']
  },
  {
    icon: '📊',
    title: 'Chart & Graph Effects',
    description: 'Hiệu ứng biểu đồ, đồ thị động',
    techs: ['JavaScript', 'D3.js', 'Chart.js']
  },
  {
    icon: '🎥',
    title: 'Video & Media Effects',
    description: 'Hiệu ứng video nền, overlay media',
    techs: ['HTML5 Video', 'CSS Filters']
  },
  {
    icon: '🔊',
    title: 'Sound & Interaction',
    description: 'Hiệu ứng âm thanh khi tương tác với UI',
    techs: ['JavaScript', 'Web Audio API']
  },
  {
    icon: '📱',
    title: 'Responsive & Adaptive Effects',
    description: 'Hiệu ứng tùy biến giao diện trên thiết bị khác nhau',
    techs: ['CSS Media Queries', 'JavaScript Resize Event']
  }
]

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true
  })
})
</script>

<style scoped>
.about {
  background: linear-gradient(135deg, #1a4b73, #a17cbc);
  color: #f0f0f5;
  padding: 70px 0;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-section {
  text-align: center;
  margin-bottom: 50px;
}

h1 {
  font-size: 3.2rem;
  background: linear-gradient(45deg, #3498db, #2ecc71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 1.4rem;
  color: #dce4f7cc;
  margin-bottom: 30px;
  font-weight: 500;
}

.gradient-line {
  height: 4px;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  width: 90px;
  margin: 0 auto;
  border-radius: 3px;
}

.welcome-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  padding: 28px 32px;
  margin-bottom: 55px;
  font-size: 1.1rem;
  color: #e6eaf7dd;
  line-height: 1.6;
  font-weight: 400;
}

.feature-section,
.effects-section,
.learning-section,
.target-section {
  margin-bottom: 70px;
}

h2 {
  font-size: 2rem;
  color: #f0f0f5;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  font-weight: 700;
}

.emoji {
  margin-right: 12px;
  font-size: 2.4rem;
  line-height: 1;
}

.feature-grid,
.effects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
  margin-top: 28px;
}

.feature-card,
.effect-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  padding: 28px 24px;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  cursor: default;
  box-shadow: 0 1px 6px rgb(0 0 0 / 0.12);
}

.feature-card:hover,
.effect-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgb(0 0 0 / 0.25);
}

.tech-tags {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tech-tags span {
  background: rgba(52, 152, 219, 0.32);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.95rem;
  color: #dbeeff;
  font-weight: 600;
  user-select: none;
}

.learning-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
}

.step {
  text-align: center;
  padding: 28px 24px;
  background: rgba(255, 255, 255, 0.11);
  border-radius: 18px;
  position: relative;
  color: #e6eaf7ee;
  font-weight: 500;
  font-size: 1.05rem;
  line-height: 1.5;
  cursor: default;
}

.step-number {
  width: 44px;
  height: 44px;
  background: linear-gradient(45deg, #3498db, #2ecc71);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-weight: 800;
  font-size: 1.3rem;
  color: #fff;
  box-shadow: 0 3px 8px rgb(52 152 219 / 0.7);
}

.inspiration {
  background: rgba(255, 255, 255, 0.12);
  border-left: 6px solid #2ecc71;
  padding: 32px 28px;
  border-radius: 0 22px 22px 0;
  margin-top: 55px;
  font-style: italic;
  color: #d0f0d7cc;
  font-weight: 600;
  user-select: none;
}

.quote-text {
  font-size: 1.55rem;
  margin-bottom: 16px;
  font-weight: 700;
  color: #a9f3a4;
}

.highlight {
  color: #2ecc71;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.03em;
}

.target-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between; /* hoặc center, tùy ý */
}

.target-card {
  flex: 1 1 calc(25% - 18px); /* 4 card trên 1 hàng trừ gap */
  max-width: calc(25% - 18px);
  background: rgba(255 255 255 / 0.12);
  padding: 28px 24px;
  border-radius: 16px;
  box-shadow: 0 5px 14px rgb(0 0 0 / 0.18);
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  cursor: default;
  color: #e5e9f0;
  font-weight: 500;
  font-size: 1.05rem;
  line-height: 1.6;
}

.target-card:hover {
  box-shadow: 0 10px 28px rgb(0 0 0 / 0.36);
  background: rgba(46, 204, 113, 0.15);
  color: #d4f2ce;
}

.target-card font-awesome-icon {
  font-size: 30px;
  color: #2ecc71;
  margin-bottom: 16px;
  display: inline-block;
  transition: color 0.3s ease;
}

.target-card:hover font-awesome-icon {
  color: #a3f7a1;
}

.target-card p {
  margin: 0;
  user-select: text;
}

@media (max-width: 768px) {
  .about {
    padding: 40px 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .feature-grid,
  .effects-grid {
    grid-template-columns: 1fr;
  }

  .learning-steps {
    grid-template-columns: 1fr;
  }

  .target-cards {
    flex-direction: column;
    align-items: center;
  }

  .target-card {
    max-width: 100%;
    flex-basis: auto;
  }
}
</style>
