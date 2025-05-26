import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGraduationCap, faCode, faPaintBrush, faUsers } from '@fortawesome/free-solid-svg-icons'

// Thêm icon vào thư viện
library.add(faGraduationCap, faCode, faPaintBrush, faUsers)

const app = createApp(App)

// Đăng ký component toàn cục
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
