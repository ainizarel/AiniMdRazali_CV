<template>
   <div id="app" :class="theme">
   <div id="body">


  <!-- Sidebar Navigation -->
<aside :class="['sidebar', { 'collapsed': !showSidebar }]">
  <div v-show="showSidebar" class="content">
    <!-- Profile Picture -->
    <div class="profile-picture">
      <img :src="require('@/assets/profilepic.jpg')" alt="Profile Picture" />
    </div>
  </div>
</aside>

<div :class="['bodyContent', showSidebar ? 'sidebar-open' : 'sidebar-collapsed']">
<!-- Top Navigation Bar -->

<nav class="top-nav">
  <button @click="toggleSidebar" class="toggle-btn">Toggle Sidebar</button>
  <ul>
        <li><a href="#education">{{ $t('education') }}</a></li>
        <li><a href="#experience">{{ $t('experience') }}</a></li>
        <li><a href="#skills">{{ $t('skills') }}</a></li>
        <li><a href="#projects">{{ $t('my_project') }}</a></li>
        <li>
        <a href="/public/CV-Aini.pdf" download="CV-Aini.pdf" class="download-resume">
          {{ $t('download_resume') }}
        </a>
        </li>
  </ul>
</nav>
 <header>
    <div class="intro">
      <h1>AINI MD. RAZALI</h1>
      <p>
        {{ $t('contact') }}: 
        <a href="mailto:ainizarel96@gmail.com">ainizarel96@gmail.com</a> |  <a href="https://wasap.my/+60134919140" target="_blank" > (+60) 13-4919140 </a>
      </p>
      <ul class="social-links">
        <li>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com" target="_blank" aria-label="GitHub">
            <font-awesome-icon :icon="['fab', 'github']" /> GitHub
          </a>
        </li>
        <li>
          <a href="mailto:ainizare96@gmail.com" aria-label="Email">
            <font-awesome-icon :icon="['fas', 'envelope']" /> Email
          </a>
        </li>
      </ul>
    </div>
  </header>
    <main>
      <section id="experience">
        <h2>{{ $t('work_experience_title') }}</h2>
        <ul>
          <li>
            <strong>Mesiniaga Sdn Bhd</strong> - Software Engineer  
            <p>{{ $t('company_mesiniaga_jobscope') }}</p>
          </li>
          <li>
            <strong>Company XYZ</strong> - Intern  
            <p>Collaborated on a project to streamline processes, reducing lead times by 15%.</p>
          </li>
        </ul>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <div class="skill">
          <span>JavaScript</span>
          <div class="progress-bar">
            <div class="progress" style="width: 90%;"></div>
          </div>
        </div>
        <div class="skill">
          <span>Vue.js</span>
          <div class="progress-bar">
            <div class="progress" style="width: 85%;"></div>
          </div>
        </div>
        <div class="skill">
          <span>UI/UX Design</span>
          <div class="progress-bar">
            <div class="progress" style="width: 75%;"></div>
          </div>
        </div>
      </section>
      <section id="education">
        <h2>Education</h2>
        <p><strong>University Name</strong> - Bachelor's Degree in [Field of Study]</p>
      </section>
    </main>
<footer class="footer">
  <p>
    This resume website is proudly built by <strong>Aini Razali</strong> using <strong>Vue.js</strong>.<br />
    <strong> Hire me </strong> if you think I’m the right talent for your team!
  </p>
</footer>



    </div>

    <!-- Floating Settings Button -->
    <button class="settings-btn" @click="toggleSettings">⚙</button>

    <!-- Settings Panel -->
    <div v-if="showSettings" class="settings-panel">
      <div class="theme-switcher">
        <h3>Theme Selector</h3>
        <button @click="changeTheme('light')">Light Theme</button>
        <button @click="changeTheme('dark')">Dark Theme</button>
      </div>
     <div class="language-switcher">
        <h3>Language Selector</h3>
        <select v-model="selectedLanguage" @change="changeLanguage(selectedLanguage)">
          <option v-for="language in languages" :value="language.code" :key="language.code">
            {{ language.name }}
          </option>
        </select>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectedLanguage: "en", // Default language
      theme: "light", // Default theme
      showSettings: false, // Toggle for settings panel
      showSidebar: window.innerWidth > 768, // Sidebar visible by default on larger screens
      languages: [
        { code: "malay", name: "Malaysia", image: "path/to/malaysia-flag.png" },
        { code: "en", name: "English", image: "path/to/english-flag.png" },
      ],
    };
  },
  methods: {
    changeLanguage(lang) {
      if (!this.languages.find((l) => l.code === lang)) {
        console.error("Invalid language:", lang);
        return;
      }
      this.$i18n.locale = lang; // Change the language dynamically
      console.log("Language changed to:", lang);
    },
    changeTheme(newTheme) {
      const validThemes = ["light", "dark"];
      if (!validThemes.includes(newTheme)) {
        console.error("Invalid theme:", newTheme);
        return;
      }
      this.theme = newTheme; // Change the theme dynamically
      console.log("Theme changed to:", newTheme);
    },
    toggleSettings() {
      console.log("Toggling settings panel:", !this.showSettings);
      this.showSettings = !this.showSettings; // Toggle settings panel
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar; // Toggle sidebar visibility
    },
    handleResize() {
      this.showSidebar = window.innerWidth > 768; // Adjust visibility based on screen size
    },
  },
  mounted() {
    // Listen for window resize events to adjust sidebar visibility
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    // Clean up the event listener
    window.removeEventListener("resize", this.handleResize);
  },
};

</script>

<style>

/* Light Theme Variables */
.light {
  --background-color:rgb(248, 255, 247);
  --text-color: #333;
  --header-background:rgb(184, 197, 196);
  --header-text-color: white;
  --button-background: #fff;
  --button-text-color:rgb(29, 211, 35);
  --button-hover-background: #4CAF50;
  --button-hover-text-color: white;
  --sidebar-background:rgb(225, 237, 213);
  --sidebar-text-color: #333;
  --action-btn-bg:rgb(255, 255, 255);
  --action-btn-text: #4CAF50;
  --action-btn-hover-bg: #4CAF50;
  --action-btn-hover-text: #ffffff;
  --select-bg:rgb(255, 249, 249);
}

/* Dark Theme Variables */
.dark {
  --background-color:rgb(61, 71, 60);
  --text-color: #f7f7f7;
  --header-background:rgb(78, 131, 83);
  --header-text-color: #fff;
  --button-background: #444444;
  --button-text-color: #f7f7f7;
  --button-hover-background: #81c784;
  --button-hover-text-color: #2c2c2c;
  --sidebar-background: #333;
  --sidebar-text-color: #fff;
  --action-btn-bg: #444444;
  --action-btn-text: #f7f7f7;
  --action-btn-hover-bg: #81C784;
  --action-btn-hover-text: #2c2c2c;
  --select-bg: #444444;
}

/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  color: var(--text-color);
  scroll-behavior: smooth;
}

header {
  background-color: var(--header-background);
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

header .intro h1 {
  margin: 0;
  font-size: 2rem;
  color: #333;
}

header .intro p {
  margin: 10px 0;
  font-size: 1rem;
  color: #555;
}

header .social-links {
  list-style: none;
  padding: 0;
  justify-content: center;
  gap: 20px;
}

header .social-links li {
  display: inline-block;
}

header .social-links a {
  text-decoration: none;
  color: #555;
  font-size: 1.2rem;
  transition: color 0.3s;
}

header .social-links a:hover {
  color: #007bff;
}

header .social-links i {
  margin-right: 8px;
}

/* Top Navigation Bar */
.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.top-nav .toggle-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.top-nav .toggle-btn:hover {
  background-color: #81C784;
}

.top-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 15px;
}

.top-nav ul li {
  display: inline-block;
}

.top-nav ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.top-nav ul li a:hover {
  color: #81C784;
}

/* Sidebar Styles */

.bodyContent {
  margin-bottom: 50px; /* Space for the footer height */
  transition: margin-left 0.3s ease; /* Smooth transition */
}
.sidebar {
  width: 250px;
  min-height: 100vh;
  height: 100%;
  background-color: var(--sidebar-background);
  color: var(--sidebar-text-color);
  position: fixed;
  top: 0;
  left: 0; /* Initially hidden */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: left 0.3s ease; /* Smooth transition for sliding */
}

.sidebar.is-visible {
  left: 0; /* Slide in */
}

.sidebar.collapsed {
  width: 0; /* Collapse to small width */
  overflow: hidden; /* Hide content when collapsed */
}



@media (min-width: 769px) {
  .sidebar {
    left: 0; /* Always visible on larger screens */
  }
  .sidebar.collapsed {
    left: 0; /* Keep in position when collapsed */
  }
    .bodyContent {
    width: 100%; /* Full width on mobile */
  }
  
}





.bodyContent {
  position: relative;
  transition: margin-left 0.3s ease, width 0.3s ease; /* Smooth transition */
  margin-left: 0;
  width: 100%; /* Default full width */
}

.bodyContent.sidebar-open {
  margin-left: 250px; /* Matches the sidebar width when open */
  width: calc(100% - 250px); /* Adjust width when sidebar is open */
}

.bodyContent.sidebar-collapsed {
  margin-left: 0; /* Matches the sidebar width when collapsed */
}


/* Profile Picture */
.profile-picture {
  margin-bottom: 20px;
}

.profile-picture img {
  width: 120px;
  height: 120px;
  border-radius: 50%; /* Makes the image circular */
  object-fit: cover;
  border: 3px solid var(--button-hover-background); /* Optional: Add a border */
}

/* Navigation Links */
.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  margin-bottom: 15px;
}

.sidebar nav ul li a {
  text-decoration: none;
  color: var(--sidebar-text-color);
  font-weight: bold;
  transition: color 0.3s;
}

.sidebar nav ul li a:hover {
  color: var(--button-hover-background);
}

/* Main Layout */
.main-layout {
  margin-left: 250px; /* Account for sidebar width */
  margin-top: 60px; /* Account for navbar height */
}

main {
  background-color: var(--background-color); /* Matches body background */
  color: var(--text-color); /* Matches body text color */
  padding: 20px 0;
}

.action-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: var(--button-background);
  color: var(--button-text-color);
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  text-align: center;
  text-decoration: none; /* Removes underline */
}

.action-btn:hover {
  background-color: var(--button-hover-background);
  color: var(--button-hover-text-color);
}

.theme-switcher {
  margin-top: 10px;
}

.theme-switcher button {
  margin: 0 5px;
  padding: 5px 10px;
  background-color: var(--button-background);
  color: var(--button-text-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.theme-switcher button:hover {
  background-color: var(--button-hover-background);
  color: var(--button-hover-text-color);
}

.intro h1 {
  margin: 0;
}

.action-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: var(--action-btn-bg);
  color: var(--action-btn-text);
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  text-align: center;
}

.action-btn:hover {
  background-color: var(--action-btn-hover-bg);
  color: var(--action-btn-hover-text);
}

section {
  margin-bottom: 30px;
}

section h2 {
  color: #4CAF50;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 5px;
}

/* Skills Section */
.skill {
  margin-bottom: 15px;
}

.progress-bar {
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  background-color: #4CAF50;
  height: 10px;
}

/* Footer */
.footer {
  background-color: var(--sidebar-background); /* Use a custom color or theme variable */
  color: var(--sidebar-text-color); /* Use a custom text color or theme variable */
  text-align: center;
  padding: 5px 0; /* Compact padding */
  position: fixed; /* Stick the footer to the bottom of the viewport */
  bottom: 0;
  left: 0;
  width: 100%; /* Full width across the screen */
  font-size: 12px; /* Compact font size */
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for separation */
  z-index: 1000; /* Ensure it stays above other elements */
}

.footer p {
  margin: 0; /* Remove default margin for compact spacing */
  line-height: 1.2; /* Adjust line height for tighter spacing */
}

/* Floating Settings Button */
.settings-btn {
  position: fixed;
  bottom: 50px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.settings-btn:hover {
  background-color: #81C784;
}

/* Settings Panel */
.settings-panel {
  position: fixed;
  bottom: 110px;
  right: 20px;
  width: 250px;
  background-color: var(--sidebar-background);
  color: var(--sidebar-text-color);
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.settings-panel h3 {
  margin: 0 0 10px;
}

/* Optional: Style the language switcher */
.language-switcher {
  margin-top: 10px;
  text-align: center;
}

.language-switcher select {
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: var(--select-bg);
  cursor: pointer;
}

.language-switcher option {
  display: flex;
  align-items: center;
}

.flag-image {
  width: 20px;
  height: 14px;
  margin-right: 8px;
}

</style>
