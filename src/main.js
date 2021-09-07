import App from "./App.vue";
import { createApp } from 'vue';
import router from "./router.js";
import store from './store/index.js';
import BaseDialog from './components/UI/BaseDialog';
import BaseCard from './components/UI/BaseCard.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseSpinner from './components/UI/BaseSpinner.vue';



const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-dialog', BaseDialog);
app.component('base-button', BaseButton);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
