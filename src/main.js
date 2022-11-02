import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import Profile from './Profile.vue'
import Gshepherd from './Gshepherd.vue'
import App from './App.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [{path: '/Internet-fall-2022/',component: Profile},{path: '/Internet-fall-2022/Gshepherd/',component: Gshepherd}]
});
createApp(App)
.use(router)
.mount('#app')
