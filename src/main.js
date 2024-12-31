import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import { messages } from "./i18n";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faEnvelope, faUser);

const i18n = createI18n({
  locale: "en", // Set default language
  messages,    // Import translations
});

const app = createApp(App);
app.use(i18n);
app.mount("#app");

app.component('font-awesome-icon', FontAwesomeIcon);
