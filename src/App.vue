<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const showSubmenu = ref(false)

function toggleSubmenu() {
  showSubmenu.value = !showSubmenu.value
}
</script>

<template>
  <div class="layout">
    <header>
      <nav>
        <div class="logo">LOGO</div>
        <ul class="nav-links">
          <li><RouterLink to="/">Trang chủ</RouterLink></li>
          <li><RouterLink to="/about">Giới thiệu</RouterLink></li>

          
          <li class="dropdown">
            <a href="#">Giao diện ▾</a>
            <ul class="dropdown-menu">
              <li class="dropdown-1">
                <a href="#" @click.prevent="toggleSubmenu">Layout ▾</a>
                <ul class="dropdown-menu-1">
                  <div class="submenu" :style="{ display: showSubmenu ? 'block' : 'none' }">
                    <RouterLink to="">Header</RouterLink>
                    <RouterLink to="">Footer</RouterLink>
                    <RouterLink to="">Sidebar</RouterLink>
                    <RouterLink to="">HeroBanner</RouterLink>
                  </div>
                </ul>
              </li>

              <li class="dropdown-2">
                <a href="#" @click.prevent="toggleSubmenu">UI ▾</a>
                <ul class="dropdown-menu-2">
                  <div class="submenu" :style="{ display: showSubmenu ? 'block' : 'none' }">
                    <RouterLink to="">Card</RouterLink>
                    <RouterLink to="">Button</RouterLink>
                    <RouterLink to="">InputField</RouterLink>
                    <RouterLink to="">DropDownMenu</RouterLink>
                    <RouterLink to="">SearchBar</RouterLink>
                    <RouterLink to="">Pagination</RouterLink>
                    <RouterLink to="">Dashboard</RouterLink>
                    <RouterLink to="">ErrorPage (404)</RouterLink>
                  </div>
                </ul>
              </li>

              <li class="dropdown-3">
                <a href="#" @click.prevent="toggleSubmenu">From ▾</a>
                <ul class="dropdown-menu-3">
                   <div class="submenu" :style="{ display: showSubmenu ? 'block' : 'none' }">
                    <RouterLink to="">LoginForm</RouterLink>
                    <RouterLink to="">RegisterForm</RouterLink>
                    <RouterLink to="">PasswordResetForm</RouterLink>
                  </div>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#">Hiệu ứng ▾</a>
            <ul class="dropdown-menu">
              <li><RouterLink to="/effect/hover">Hover</RouterLink></li>
              <li><RouterLink to="/effect/animate">Animation</RouterLink></li>
              <li><RouterLink to="/effect/scroll">Scroll</RouterLink></li>
              <li><RouterLink to="/effect/3d">3D</RouterLink></li>
            </ul>
          </li>

        </ul>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
}

.layout {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
}

header {
  width: 100%;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 40px;
  background-color: rgba(6, 27, 27, 0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
}

nav .logo {
  font-weight: bold;
  color: white;
  font-size: 24px;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.nav-links li {
  position: relative;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
  display: inline-block;
}

.nav-links li a:hover {
  background-color: goldenrod;
  border: 1px green solid;
}

.router-link-active {
  border: 1px green solid;
  background-color: #797bea98;
}

/* Dropdown chính */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  list-style: none;
  padding: 4px 0;
  margin: 0;
  min-width: 180px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 999;
}

.dropdown-menu li {
  width: 100%;
}

.dropdown-menu li a {
  display: block;
  color: #333;
  text-decoration: none;
  padding: 10px 16px;
  font-size: 15px;
  border-bottom: 1px solid #eee;
  transition: background-color 0.3s;
}

.dropdown-menu li a:hover {
  background-color: blue;
  color: black;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

/* Các menu con cấp 2 */
.dropdown-1 .dropdown-menu-1,
.dropdown-2 .dropdown-menu-2,
.dropdown-3 .dropdown-menu-3 {
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.dropdown-1:hover .dropdown-menu-1,
.dropdown-2:hover .dropdown-menu-2,
.dropdown-3:hover .dropdown-menu-3 {
  display: block;
  opacity: 1;
}

.submenu {
  background-color: #dfe6e9;
}

.submenu a {
  padding: 8px 10px;
  display: block;
  text-decoration: none;
  color: #000;
}

main {
  padding-top: 10px;
  background-color: #6c4de782;
  color: black;
  height: 100%;
}
</style>
