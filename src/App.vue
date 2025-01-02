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

    <!-- Summary Section -->
    <div class="summary">
      <p>
        I am a developer with over 4 years of industrial experience and 7 years of programming, including my university studies and work as a part-time developer. Married with two children, I balance my love for technology with family life and a passion for travel, which inspires my creativity and fuels my drive.
      </p>
    </div>

    <!-- Languages Section -->
    <div class="languages">
      <h2>Languages</h2>
      <ul>
        <li>
          <span>Malay</span>
          <div class="stars">
            ★★★★★
          </div>
        </li>
        <li>
          <span>English</span>
          <div class="stars">
            ★★★★★
          </div>
        </li>
        <li>
          <span>Arabic</span>
          <div class="stars">
            ★★☆☆☆
          </div>
        </li>
      </ul>
    </div>

    <!-- Experience Section -->
    <div class="experience">
      <h2>Experience Summary</h2>
      <p>5+ Years in Software Development</p>
      <div class="striped-bar">
        <div class="bar" style="width: 80%;"></div>
      </div>
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
          <a href="https://drive.google.com/uc?export=download&id=1c_gpC9DjNm-5UNJ96xPeLiJdOTKiKkQd" download="CV-Aini.pdf" class="download-resume">
            {{ $t('download_resume') }}
          </a>
        </li>
  </ul>
</nav>
 <header>
    <div class="intro">
      <h1>AINI MD. RAZALI</h1>
      <p class="tagline">
      Full-Stack Developer | Mobile Developer | Problem Solver | Lifelong Learner
      </p>
      <p class="location">
      📍 Kuala Lumpur, Malaysia
      </p>

      <p>
        {{ $t('contact') }}: 
        <a href="mailto:ainizarel96@gmail.com">ainizarel96@gmail.com</a> |  <a href="https://wasap.my/+60134919140" target="_blank" > (+60) 13-4919140 </a>
      </p>
 <ul class="social-links">
  <li>
    <a href="https://www.linkedin.com/in/ainimdrazali/" target="_blank" aria-label="LinkedIn" class="tooltip">
      <font-awesome-icon :icon="['fab', 'linkedin']" />
      <span class="tooltip-text">LinkedIn</span>
    </a>
  </li>
  <li>
    <a href="https://github.com/ainizarel" target="_blank" aria-label="GitHub" class="tooltip">
      <font-awesome-icon :icon="['fab', 'github']" />
      <span class="tooltip-text">GitHub</span>
    </a>
  </li>
  <li>
    <a href="mailto:ainizare96@gmail.com" aria-label="Email" class="tooltip">
      <font-awesome-icon :icon="['fas', 'envelope']" />
      <span class="tooltip-text">Email</span>
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
       <section id="project">
        <h2>Project Involved / Developed</h2>
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
  width: fit-content;
  min-width: 100%;
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

  .social-links {
    display: flex;
    list-style: none;
    gap: 15px;
    padding: 0;
  }

  .tooltip {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  .tooltip-text {
    visibility: hidden;
    width: 100px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%; /* Adjust based on positioning */
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 0.85rem;
  }

  .tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
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
  font-size: 90%;
  margin: 5px;
}

.top-nav ul li a:hover {
  color: #81C784;
}

/* Sidebar Styles */

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


  
}


.content {
  max-height: 94%;
  padding: 5px;
  text-align: center;
  overflow: auto;
}

/* Section Titles */
h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: #333333;
  margin-bottom: 10px;
  border-bottom: 2px solid #0077b6;
  display: inline-block;
  padding-bottom: 5px;
}

/* Languages Section */
.languages ul {
  list-style-type: none;
  padding: 0;
}

.languages li {
  margin: 10px 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: #555555;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.languages li .stars {
  color: #ffd700;
  font-size: 1.2rem;
}

/* Experience Section */
.experience {
  margin: 5px;
  margin-bottom: 30px;

}

.striped-bar {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-top: 10px;
}

.striped-bar .bar {
  height: 100%;
  background: linear-gradient(
    45deg,
    #0077b6 25%,
    #0096c7 25%,
    #0096c7 50%,
    #0077b6 50%,
    #0077b6 75%,
    #0096c7 75%
  );
  background-size: 40px 40px;
  animation: moveStripes 1s linear infinite;
  border-radius: 10px;
}

/* Animation for Striped Effect */
@keyframes moveStripes {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 40px 0;
  }
}

/* Hover and Animation Effects */
.sidebar:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
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
  width: 100%; /* Default full width */
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
  width:100%
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
  font-size: 90%;
}
/* Floating Settings Button */
.settings-btn {
  position: fixed;
  bottom: 9vh; /* Use relative units for better responsiveness */
  right: 2vw; /* Relative to viewport width */
  width: 50px;
  height: 50px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;
}

.settings-btn:hover {
  background-color: #81C784;
  transform: scale(1.1); /* Slight zoom effect on hover */
}

/* Settings Panel */
.settings-panel {
  position: fixed;
  bottom: 17vh; /* Space above the button */
  right: 3vw;
  width: 90vw; /* Responsive width */
  max-width: 400px; /* Limit max width */
  background-color: var(--sidebar-background);
  color: var(--sidebar-text-color);
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1000; /* Ensure it stays on top */
}

.settings-panel h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
  text-align: center;
}

/* Theme Buttons */
.theme-switcher button {
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.theme-switcher button:hover {
  background-color: #ccc; /* Change to your desired hover color */
}

/* Language Switcher */
.language-switcher {
  margin-top: 10px;
  text-align: center;
}

.language-switcher select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: var(--select-bg);
  cursor: pointer;
  width: 100%; /* Full width */
}

.language-switcher option {
  display: flex;
  align-items: center;
}

/* Flag Image */
.flag-image {
  width: 20px;
  height: 14px;
  margin-right: 8px;
}

/* Media Queries */
@media (max-width: 768px) {
  .settings-btn {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  .settings-panel {
    width: fit-content;
    padding: 15px;
  }

  .settings-panel h3 {
    font-size: 1em;
  }

  .theme-switcher button {
    font-size: 14px;
    padding: 8px;
  }

  .language-switcher select {
    font-size: 14px;
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .settings-btn {
    bottom: 7vh;
    right: 1vw;
    width: 35px;
    height: 35px;
    font-size: 14px;
  }

  .settings-panel {
    width: fit-content;
    bottom: 12vh;
    padding: 10px;
  }

  .settings-panel h3 {
    font-size: 0.9em;
  }

  .theme-switcher button {
    font-size: 12px;
    padding: 6px;
  }

  .language-switcher select {
    font-size: 12px;
    padding: 6px;
  }
}


</style>
