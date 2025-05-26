<template>
  <div class="relative bg-white overflow-x-hidden">
    <!-- Navigation bar -->
    <nav
      class="mx-2 rounded-[20px] border border-[#E6E6E6] bg-white flex items-center justify-between px-6 py-4 select-none inter-font relative"
    >
      <div class="flex items-center space-x-4">
        <img alt="HomeNest logo" class="h-14 w-auto" height="60" src="./img/3.png" width="550px" />
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        id="menu-btn"
        aria-label="Toggle Menu"
        class="md:hidden text-black text-2xl focus:outline-none"
        @click="toggleMenu"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Menu chính -->
      <ul
        id="menu"
        :class="{'hidden md:flex': true, 'scale-y-0': !menuOpen, 'scale-y-100': menuOpen}"
        class="items-center space-x-8 text-[13px] font-normal text-black perspective-500 transition-transform duration-300 origin-top"
      >
        <li
          class="bg-black text-white rounded-full px-5 py-2 text-[13px] font-semibold cursor-default transform transition-transform duration-300 hover:rotateX-10 hover:scale-105"
        >
          TRANG CHỦ
        </li>
        <li
          class="bg-black text-white rounded-full px-5 py-2 text-[13px] font-semibold cursor-default transform transition-transform duration-300 hover:rotateX-10 hover:scale-105"
        >
          Dịch vụ Kingcrab
          <i class="fas fa-caret-down text-[10px]"></i>
        </li>
        <li>
          <button
            aria-current="page"
            class="bg-black text-white rounded-full px-5 py-2 text-[13px] font-semibold cursor-default transform transition-transform duration-300 hover:rotateX-10 hover:scale-105"
          >
            DỰ ÁN
          </button>
        </li>
        <li
          class="bg-black text-white rounded-full px-5 py-2 text-[13px] font-semibold cursor-default transform transition-transform duration-300 hover:rotateX-10 hover:scale-105"
        >
          Liên hệ
        </li>
      </ul>

      <!-- Menu phải -->
      <div
        id="menu-right"
        class="hidden md:flex items-center space-x-6 text-[13px] font-normal text-black perspective-500"
      >
        <div
          class="flex items-center cursor-pointer select-none transform transition-transform duration-300 hover:rotateX-10 hover:scale-105"
        >
          VI
          <i class="fas fa-caret-down text-[10px] ml-1"></i>
        </div>
        <button
          aria-label="Search"
          class="text-black text-lg cursor-pointer transform transition-transform duration-300 hover:rotateX-10 hover:scale-105"
        >
          <i class="fas fa-search"></i>
        </button>
        <button
          aria-label="Menu"
          class="text-black text-lg cursor-pointer transform transition-transform duration-300 hover:rotateX-10 hover:scale-105"
        >
          <i class="fas fa-th-large"></i>
        </button>
      </div>
    </nav>

    <!-- Main content HomeNest -->
    <main
      class="max-w-7xl mx-auto px-6 mt-16 flex flex-col md:flex-row items-center justify-between gap-10 inter-font fade-in-section"
    >
      <section class="max-w-xl flex flex-col space-y-6">
        <h1 class="text-4xl sm:text-5xl font-extrabold leading-[1.1] max-w-xl">
          <span>Kingcrab</span>
          <span>–</span>
          <span class="text-[#5F7DB0]">Kiến tạo giải pháp số,</span><br />
          <span class="text-[#7D6B85]">nâng tầm thương hiệu</span>
          <span class="font-black">trực tuyến.</span>
        </h1>

        <div class="flex flex-wrap gap-10 mt-6 max-w-xl">
          <div class="flex flex-col items-center text-center max-w-[120px]">
            <h2
              class="text-[32px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5F7DB0] to-[#D9DFFF] leading-none tracking-tight"
            >
              +300%
            </h2>
            <p class="text-[13px] font-semibold mt-2">Mức độ tăng trưởng website</p>
          </div>
          <div class="flex flex-col items-center text-center max-w-[120px]">
            <h2
              class="text-[32px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B75A56] to-[#D9DFFF] leading-none tracking-tight"
            >
              +2.000%
            </h2>
            <p class="text-[13px] font-semibold mt-2">Lượng traffic tăng trưởng</p>
          </div>
          <div class="flex flex-col items-center text-center max-w-[120px]">
            <h2
              class="text-[32px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#D9DFFF] to-[#D9DFFF] leading-none tracking-tight"
            >
              6.000+
            </h2>
            <p class="text-[13px] font-semibold mt-2">Contact đổ về trong tháng</p>
          </div>
        </div>
        <button
          class="mt-10 w-max rounded-full border border-[#5F7DB0] text-[#5F7DB0] px-6 py-2 text-[13px] font-semibold flex items-center gap-2 hover:border-[#B75A56] hover:text-[#B75A56] transition-colors duration-300"
          type="button"
        >
          <i class="fas fa-chevron-right text-[10px]"></i>
          Tư vấn ngay
        </button>
      </section>
      <section class="flex-shrink-0">
        <img src="./img/3.png" style="width: 500px" alt="" />
      </section>
    </main>

    <!-- Team HomeNest.Media section -->
    <section
      class="max-w-[1400px] mx-auto px-6 py-10 flex flex-col md:flex-row md:items-start md:gap-20 mt-20 fade-in-section"
    >
      <!-- Left side text and button -->
      <div class="flex flex-col max-w-[350px] md:max-w-[400px]">
        <h2 class="text-3xl font-extrabold leading-tight mb-0">Đội ngũ</h2>
        <h3 class="text-4xl md:text-5xl font-extrabold leading-tight flex flex-wrap mb-10">
          <span class="text-[#B35A54]">King</span>
          <span class="text-[#6B6EAB]">Crab.Online</span>
        </h3>
        <div class="relative mb-6">
          <h1
            class="text-[120px] md:text-[140px] font-extrabold text-transparent stroke-[1px] stroke-[#6B6EAB] select-none leading-[1]"
            style="-webkit-text-stroke: 1px #6b6eab"
          >
            50+
          </h1>
          <p class="absolute bottom-0 left-0 text-xs font-semibold text-black">Thành viên</p>
        </div>
        <button
          class="flex items-center gap-2 text-xs font-normal text-[#6B6EAB] border border-[#6B6EAB] rounded-full px-5 py-2 hover:text-[#B35A54] hover:border-[#B35A54] transition-colors duration-300 w-max"
        >
          <i class="fas fa-chevron-right text-[10px]"></i>
          Xem chi tiết
        </button>
      </div>
      <!-- Right side cards grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mt-10 md:mt-0 max-w-[900px] w-full">
        <!-- Card 1 -->
        <div class="rounded-xl overflow-hidden border border-gray-200 max-w-[250px] relative">
          <div class="relative">
            <img src="/public/images/tu.png" alt="" />
            <button
              class="absolute bottom-[-20px] left-5 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition"
            >
              <i class="fas fa-chevron-right text-xs"></i>
            </button>
          </div>
          <div class="p-5 pt-10">
            <h2 class="text-base font-normal mb-1" style="color: rgb(146, 0, 0); font-size: 20px">
              Nguyễn Thanh Tự
            </h2>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="rounded-xl overflow-hidden border border-gray-200 max-w-[250px] relative">
          <div class="relative">
            <img src="/public/images/bao.png" alt="" />
            <button
              class="absolute bottom-[-20px] left-5 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition"
            >
              <i class="fas fa-chevron-right text-xs"></i>
            </button>
          </div>
          <div class="p-5 pt-10">
            <h2 class="text-base font-normal mb-1" style="color: rgb(146, 0, 0); font-size: 20px">
              Nguyễn Văn Bảo
            </h2>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="rounded-xl overflow-hidden border border-gray-200 max-w-[250px] relative">
          <div class="relative">
            <img src="/public/images/vinh.png" alt="" />
            <button
              class="absolute bottom-[-20px] left-5 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition"
            >
              <i class="fas fa-chevron-right text-xs"></i>
            </button>
          </div>
          <div class="p-5 pt-10">
            <h2 class="text-base font-normal mb-1" style="color: rgb(146, 0, 0); font-size: 20px">
              Phan Thế Vĩnh
            </h2>
          </div>
        </div>
      </div>
    </section>

    <!-- Left vertical social and hotline for Team HomeNest.Media -->
  

    <div id="doithe1s-livechat" class="doithe1s-livechat-widget active">
      <div class="doithe1s-livechat-text">Hỗ Trợ </div>

      <div class="doithe1s-livechat-button">
        <div class="close-icon">
          <svg
            width="12"
            height="13"
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g transform="translate(-4087 108)">
              <g>
                <path
                  transform="translate(4087 -108)"
                  fill="#FFFFFF"
                  d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div class="icons">
          <div class="icons-line" style="transform: translateX(0px)">
            <span><img src="https://doithe1s.vn/storage/userfiles/images/zalo.png" alt="Icon" class="shake" /></span>
            <span
              ><img
                src="https://doithe1s.vn/storage/userfiles/images/Telegram_2019_Logo.svg.png"
                alt="Icon"
                class=""
            /></span>
            <span
              ><img
                src="https://doithe1s.vn/storage/userfiles/images/2021_Facebook_icon.svg.png"
                alt="Icon"
                class=""
            /></span>
          </div>
        </div>
        <div class="pulsation"></div>
        <div class="pulsation"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

onMounted(() => {
  const faders = document.querySelectorAll(".fade-in-section");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("is-visible");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});
</script>

<style scoped>
/* body {
  font-family: "Montserrat", sans-serif;
} */

.inter-font {
  font-family: "Inter", sans-serif;
}

/* ----- Hiệu ứng 3D hover menu và nút ----- */
nav ul#menu > li,
nav #menu-right > div,
nav #menu-right > button,
button {
  transform-style: preserve-3d;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
}

nav ul#menu > li:hover,
nav #menu-right > div:hover,
nav #menu-right > button:hover,
button:hover {
  transform: rotateX(15deg) scale(1.05) translateZ(10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

/* ----- Card team hiệu ứng 3D hover ----- */
.grid > div.rounded-xl.relative {
  perspective: 600px;
  transform-style: preserve-3d;
  transition: box-shadow 0.3s ease;
  will-change: transform;
}

.grid > div.rounded-xl.relative:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

.grid > div.rounded-xl.relative > .relative > img {
  transition: transform 0.5s ease;
  transform-origin: center center;
  will-change: transform;
}

.grid > div.rounded-xl.relative:hover > .relative > img {
  transform: scale(1.1) rotateY(15deg) rotateX(5deg);
  filter: brightness(1.1);
  box-shadow: 0 10;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* ----- Nút Scroll Top hiệu ứng hover ----- */
button[aria-label="Scroll to top"] {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  will-change: transform;
}

button[aria-label="Scroll to top"]:hover {
  transform: scale(1.1) translateY(-4px);
  box-shadow: 0 10px 25px rgba(213, 106, 90, 0.7);
  cursor: pointer;
}

/* ----- Hiệu ứng fade-in khi scroll vào viewport ----- */
.fade-in-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  will-change: opacity, transform;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: none;
}

/* Tailwind không có scale-y-100 mặc định, nên khai báo thêm */
.scale-y-0 {
  transform: scaleY(0);
}

.scale-y-100 {
  transform: scaleY(1);
}

/* Chỉnh ảnh team card bo góc nhẹ */
.grid img {
  border-radius: 0.75rem;
  display: block;
  width: 100%;
  height: auto;
}

/* Phần live chat */
.doithe1s-livechat-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
}
.doithe1s-livechat-widget.active {
  opacity: 1;
}

.doithe1s-livechat-text {
  background-color: #fff;
  color: #28a745;
  padding: 8px 24px 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  position: relative;
  z-index: 1;
}
.doithe1s-livechat-text.hide {
  display: none;
}

.doithe1s-livechat-button {
  width: 60px;
  height: 60px;
  background-color: #28a745;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 2;
  margin-left: -20px;
}

.doithe1s-livechat-button .close-icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transition: transform 0.2s ease;
}
.doithe1s-livechat-button .close-icon svg {
  width: 24px;
  height: 24px;
}
.doithe1s-livechat-button .close-icon.show {
  transform: scale(1);
}

.doithe1s-livechat-button .pulsation {
  position: absolute;
  width: 74px;
  height: 74px;
  background-color: #28a745;
  border-radius: 50%;
  z-index: -1;
  transform: scale(0);
  animation: pulse 2s infinite;
}
.doithe1s-livechat-button .pulsation:nth-child(2) {
  animation-delay: 0.5s;
}
.doithe1s-livechat-button .pulsation.stop {
  animation: none;
}
@keyframes pulse {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.doithe1s-livechat-button .icons {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -20px;
  overflow: hidden;
  transition: transform 0.2s ease;
}
.doithe1s-livechat-button .icons.hide {
  transform: scale(0);
  opacity: 0;
}
.doithe1s-livechat-button .icons-line {
  display: flex;
  position: absolute;
  top: 8px;
  left: 8px;
  transition: transform 0.5s ease-in-out;
}
.doithe1s-livechat-button .icons-line span {
  width: 24px;
  height: 24px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.doithe1s-livechat-button .icons-line span img {
  width: 24px;
  height: 24px;
}
.doithe1s-livechat-button .icons-line span img.shake {
  animation: iconShake 0.7s ease-in-out infinite;
}
@keyframes iconShake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  10%,
  30% {
    transform: rotate(-10deg);
  }
  20%,
  40% {
    transform: rotate(10deg);
  }
}

.doithe1s-livechat-menu {
  position: absolute;
  bottom: 70px;
  right: 0;
  width: 300px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  transform: scale(0);
  transform-origin: 80% 105%;
  transition: transform 0.2s ease-out;
}
.doithe1s-livechat-menu.open {
  transform: scale(1);
}

.doithe1s-livechat-menu .menu-header {
  background: #28a745;
  color: #fff;
  padding: 12px 15px;
  border-radius: 7px 7px 0 0;
  font-size: 17px;
  position: relative;
}
.doithe1s-livechat-menu .menu-header .close-btn {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 26px;
  height: 26px;
  background: #28a745;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.doithe1s-livechat-menu .menu-header .close-btn svg {
  width: 12px;
  height: 12px;
}

.doithe1s-livechat-menu .menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.doithe1s-livechat-menu .menu-list li a {
  display: flex;
  align-items: center;
  padding: 8px 20px 8px 60px;
  position: relative;
  min-height: 44px;
  text-decoration: none;
  color: #000;
}
.doithe1s-livechat-menu .menu-list li a:hover {
  background: #eee;
}
.doithe1s-livechat-menu .menu-list li a span {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.doithe1s-livechat-menu .menu-list li a span img {
  width: 20px;
  height: 20px;
}
.doithe1s-livechat-menu .menu-list li a .item-label {
  margin: 0;
}
.doithe1s-livechat-menu .menu-list li a .item-title {
  font-size: 15px;
}
.doithe1s-livechat-menu .menu-list li a .item-subtitle {
  font-size: 13px;
  color: #787878;
}

@media (max-width: 428px) {
  .doithe1s-livechat-widget.open {
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .doithe1s-livechat-widget.open .doithe1s-livechat-button {
    display: none;
  }
  .doithe1s-livechat-widget.open .doithe1s-livechat-text {
    display: none;
  }
  .doithe1s-livechat-widget.open .doithe1s-livechat-menu {
    width: 100%;
    bottom: 0;
    border-radius: 0;
  }
  .doithe1s-livechat-widget.open .doithe1s-livechat-menu .menu-header {
    border-radius: 0;
    padding-right: 40px;
  }
}

.contact-option-doithe1s img {
  border-radius: 50%;
  border: 1px solid #28a745;
}
@keyframes rotateShake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  10%,
  30% {
    transform: rotate(-10deg);
  }
  20%,
  40% {
    transform: rotate(10deg);
  }
}
@keyframes borderPulse {
  0% {
    box-shadow: 0 0 5px #28a745;
  }
  50% {
    box-shadow: 0 0 20px #28a745;
  }
  100% {
    box-shadow: 0 0 5px #28a745;
  }
}
.contact-option-doithe1s img {
  display: inline-block;
  animation: rotateShake 0.7s ease-in-out infinite, borderPulse 2s infinite;
  transition: transform 0.3s ease-in-out;
}


</style>


