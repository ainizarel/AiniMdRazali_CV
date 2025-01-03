// Import libraries and components
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import { messages } from "./i18n";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Brand icons
import '@fortawesome/fontawesome-free/css/all.css';

// Import specific icons
import { faEnvelope, faUser, faBars, faBuilding, faBriefcase, faClock} from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faLinkedin, faGithub, faEnvelope, faUser, faBars, faBuilding, faBriefcase, faClock);

// Create i18n instance
const i18n = createI18n({
  locale: "en", // Set default language
  messages,    // Import translations
});

// Create Vue app instance
const app = createApp(App);

// Register FontAwesome globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use i18n
app.use(i18n);

// Mount app
app.mount("#app");
