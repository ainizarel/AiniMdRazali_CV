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

    <div class="languages">
      <h2>{{ $t('languages') }}</h2>
      <ul>
        <li>
          <span>✔️ {{ $t('lang_malay') }}</span>
          <span class="proficiency" data-tooltip="">{{ $t('lang_native') }}</span>
        </li>
        <li>
          <span>✔️ {{ $t('lang_en') }}</span>
          <span class="proficiency" data-tooltip="">{{ $t('lang_fluent') }}</span>
        </li>
        <li>
          <span>✔️ {{ $t('lang_arabic') }}</span>
          <span class="proficiency" data-tooltip="">{{ $t('lang_basic') }}</span>
        </li>
      </ul>
    </div>


    <!-- Experience Section -->
 <div class="experience-sidebar">
  <h2> {{ $t('experience_summary') }}</h2>
  <p> {{ $t('experience_summary_1') }}</p>
  <div class="striped-bar">
    <div class="bar" style="width:  50%;"></div>
    <div class="scale">
      <span>Junior</span>
      <span>Mid</span>
      <span>Senior</span>
      <span>Expert</span>
    </div>
  </div>
  <p>{{ $t('experience_summary_2') }}</p>
  <div class="striped-bar">
    <div class="bar" style="width: 20%;"></div>
    <div class="scale">
      <span>Junior</span>
      <span>Mid</span>
      <span>Senior</span>
      <span>Expert</span>
    </div>
  </div>
</div>

  </div>
</aside>


<div :class="['bodyContent', showSidebar ? 'sidebar-open' : 'sidebar-collapsed']">
<!-- Top Navigation Bar -->

<nav class="top-nav">
  <button @click="toggleSidebar" class="toggle-btn">
    <i class="fas fa-bars"></i> <!-- Sidebar toggle icon -->
  </button>
  <ul>
        <li><a href="#education">{{ $t('education') }}</a></li>
        <li><a href="#experience">{{ $t('experience') }}</a></li>
        <li><a href="#skills">{{ $t('skills') }}</a></li>
        <li><a href="#projects">{{ $t('my_project') }}</a></li>
        <li>
          <a href="https://drive.google.com/uc?export=download&id=1Aa_otRhjhp9jf6RTpt2J3i1GU3hOMbMu" download="CV-Aini.pdf" class="download-resume">
            {{ $t('download_resume') }}
          </a>
        </li>
  </ul>
</nav>
 <header>
    <div class="intro">
      <h1>AINI MD. RAZALI</h1>
      <p class="tagline">
      {{ $t('tag1') }} |  {{ $t('tag2') }} |  {{ $t('tag3') }} |  {{ $t('tag4') }}
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
    
      <section id="summary">
        <h2>{{ $t('professional_summary_title') }}</h2>
        <p>{{ $t('professional_summary_content') }}</p>
      </section>

      <section id="experience">
        <h2>{{ $t('work_experience_title') }}</h2>
          <div class="timeline">
        <div
          class="timeline-item"
          v-for="job in jobs"
          :key="job.id"
          @click="navigateTo(job.url)"
          :title="'Click here to know about ' + job.company" 
          style="cursor: pointer;"
        >
            <div class="timeline-date">
              <h1>✔️{{ job.date }}</h1>               
              <p v-if="job.isCurrent">
                <strong> -----  {{ calculateDuration(job.startDate) }}</strong>
              </p>
            </div>
            <div class="timeline-content"  style="padding-left: 50px;">
              <h3>
                <font-awesome-icon :icon="['fas', 'building']" /> {{ job.company }}
              </h3>
              <p>
                <font-awesome-icon :icon="['fas', 'briefcase']" /> {{ $t(`company_${job.id}_title`) }}
              </p>
              <p>{{ $t(`company_${job.id}_jobscope`) }}</p>
              <a
                v-if="job.recommendationLetterUrl"
                :href="job.recommendationLetterUrl"
                target="_blank"
                class="recommendation-link"
                @click.stop
              >
               <i class="fas fa-download" style="margin-right: 5px;"></i>
                View Recommendation Letter
              </a>

            </div>
          </div>
        </div>
      </section>




      <section id="skills">
        <h2>{{ $t('skills') }}</h2>
        <div class="skill-category">
        <h3> ✔️ {{ $t('tech_skills') }}</h3>
        </div>
        <div class="skill-category-content" style="padding-left: 50px;">
          <h3>Frontend Development</h3>
          <p>
            Proficient in <strong>ReactJS, VueJS, HTML5, CSS, cshtml, Bootstrap, JavaScript, MUI Material</strong> and <strong>Flutter</strong> for building responsive and user-friendly interfaces.<br />
            Experienced in mobile app development using <strong>PhoneGap, Xcode (iOS IDE),</strong> and <strong>Android Studio (Android IDE).</strong>
          </p>

          <h3>Backend Development</h3>
          <p>
            Basic knowledge of <strong>C#, MVC .Net, Django,</strong> and <strong>Google Apps Script,</strong> with hands-on experience in creating simple backend solutions.<br />
            Beginner-level experience with <strong>Microsoft SQL, MongoDB,</strong> and <strong>Firebase</strong> for database management tasks.
          </p>

          <h3>Version Control & CI/CD</h3>
          <p>
            Hands-on experience with <strong>GitHub</strong> for version control and basic CI/CD workflows to streamline development processes.
          </p>

          <h3>Integration & Optimization</h3>
          <p>
            Strong understanding of <strong>RESTful API integration</strong> to enable seamless communication between systems.<br />
            Familiarity with tools like <strong>Webpack</strong> and <strong>NPM</strong> for modern development workflows and optimization.
          </p>

          <h3>Methodologies</h3>
          <p>
            Experience in both <strong>Agile</strong> and <strong>Waterfall</strong> methodologies for managing and delivering projects effectively.
          </p>

          <h3>Performance & Documentation</h3>
          <p>
            Experienced in <strong>performance tuning, memory management,</strong> and ensuring application responsiveness.<br />
            Adept at writing clear, structured <strong>technical documentation</strong> to enhance team collaboration and knowledge sharing.
          </p>
        </div>
        <div class="skill-category">
          <h3>✔️ {{ $t('soft_skills') }}</h3>
          <div class="skill-category-content" style="padding-left: 50px;">
          <p>
            <strong>Problem-Solving:</strong> Strong analytical abilities to tackle complex technical challenges effectively.<br />
            <strong>Team Collaboration:</strong> Excellent communication and teamwork skills, fostering a productive work environment.<br />
            <strong>Proactive Mindset:</strong> Focused on continuous improvement, contributing to process enhancements and innovative solutions.<br />
            <strong>Adaptability:</strong> Quickly learns and applies new tools, frameworks, and technologies in dynamic environments.<br />
            <strong>Attention to Detail:</strong> Ensures precision and accuracy in code, design, and workflows.
          </p>
          </div>
        </div>
      </section>

      <section id="education">
        <h2>{{ $t('education') }}</h2>
        <p>
          <i class="fas fa-graduation-cap"></i>
          <strong> Universiti Teknologi PETRONAS (2014-2018) </strong> - {{ $t('education_degree') }}
        </p>
        <p>
          <i class="fas fa-graduation-cap"></i>
          <strong> Universiti Teknologi PETRONAS (2014) </strong> - {{ $t('education_foundation') }}
        </p>
        <p>
          <i class="fas fa-graduation-cap"></i>
          <strong> SMA (Atas) Sultan Zainal Abidin (2012-2013) </strong> - {{ $t('education_SPM') }}
        </p>
        <p>
          <i class="fas fa-graduation-cap"></i>
          <strong> SMA (Atas) Sultan Zainal Abidin (2009-2011) </strong> - {{ $t('education_PMR') }}
        </p>
        <p>
          <i class="fas fa-graduation-cap"></i>
          <strong>SRI Al-Amin Kerteh (2001-2008) </strong> - {{ $t('education_UPSR') }}
        </p>
      </section>
       <section id="project">
        <h2>{{ $t('my_project') }}</h2>
        <p>We are sorry, currently this section is under maintenance</p>
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
      jobs: [
      {
        id: 4,
        company: "Mesiniaga Sdn Bhd",
        date: "2022 - Present",
        startDate: "2022-11-01",
        isCurrent: true,
        url: "https://mesiniaga.com.my/about-mesiniaga/",
        recommendationLetterUrl: "",
      },
      {
        id: 3,
        company: "OrangeFIN Asia Sdn Bhd (Insite My)",
        date: "2021 - 2022",
        startDate: "",
        endDate: "",
        isCurrent: false,
        url: "https://orangefinasia.com/",
        recommendationLetterUrl: "",
      },
      {
        id: 2,
        company: "Universiti Teknologi PETRONAS",
        date: "2019 - 2020",
        startDate: "",
        endDate: "",
        isCurrent: false,
        url: "https://www.utp.edu.my/Pages/Home.aspx",
        recommendationLetterUrl: "",
      },
      {
        id: 1,
        company: "PETRONAS Chemical Ammonia Sdn Bhd",
        date: "2017",
        startDate: "",
        endDate: "",
        isCurrent: false,
        url: "https://www.petronas.com/pcg/about-us/our-operations",
        recommendationLetterUrl: "https://drive.google.com/file/d/1rwJFUqysPH0pYY_-zWpfhZuj4if5Wfsk/preview",
      },
      {
        id: 0,
        company: "PART TIME",
        date: "2019",
        startDate: "",
        endDate: "",
        isCurrent: false,
        url: "",
        recommendationLetterUrl: "",
      },
    ],
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
  calculateDuration(startDate) {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
    const diffDays = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    const months = this.$t('months');
    const days = this.$t('day');

    return `${diffMonths} ${months} & ${diffDays} ${days}`;
  },
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
    navigateTo(url) {
        if (!url) {
          console.error("Invalid URL");
          return;
        }

        // Check if the URL is external (starts with "http://" or "https://")
        if (url.startsWith("http://") || url.startsWith("https://")) {
          window.open(url, "_blank"); // Open external URL in a new tab
        } else {
          if (this.$router) {
            // Open internal route in a new tab
            const newTab = window.open();
            newTab.opener = null; // Security best practice
            newTab.location = this.$router.resolve(url).href;
          } else {
            console.warn("Router is not available. Redirecting using window.open");
            window.open(url, "_blank"); // Fallback for internal navigation
          }
        }
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
  --button-text-color:rgb(22, 24, 22);
  --button-hover-background: rgb(128, 220, 229);
  --button-hover-text-color: white;
  --sidebar-background:rgba(89, 126, 135, 0.52);
  --sidebar-text-color: #333;
  --action-btn-bg:rgb(45, 95, 99);
  --action-btn-text:rgb(17, 17, 17);
  --action-btn-hover-bg:rgb(128, 220, 229);
  --action-btn-hover-text: #ffffff;
  --select-bg:rgb(255, 249, 249);
  --toggle-btn-bg : rgba(141, 156, 141, 0.32);
  --toggle-btn-hover : rgb(128, 220, 229);
  --footer-background : rgb(184, 197, 196);
  --footer-text-color : rgb(61, 71, 60);
  --profile-pic-border :rgba(255, 255, 255, 0.55);
  --section-text-color : rgb(97, 122, 129);
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
  color: #ffffff;
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
  background-color: var(--toggle-btn-bg);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.top-nav .toggle-btn:hover {
  background-color: var(--toggle-btn-hover);
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

/* Custom scrollbar */
.sidebar::-webkit-scrollbar {
  width: 10px; /* Width of the scrollbar */
}

.sidebar::-webkit-scrollbar-track {
  background: #e0e0e0; /* Track color */
  border-radius: 5px; /* Optional: Round corners */
}

.sidebar::-webkit-scrollbar-thumb {
  background: #4CAF50; /* Scrollbar color */
  border-radius: 5px; /* Optional: Round corners */
  border: 2px solid #e0e0e0; /* Add padding effect */
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: #81C784; /* Color on hover */
}

/* Ensure compatibility for non-WebKit browsers */
.sidebar {
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color:#536767 rgba(83, 103, 103, 0.64);
}

.summary {
  font-size: 1rem;
  text-align: justify;
  line-height: 1.6;
  color: #555;
  padding: 7px;
}



.content {
  min-height:96%;
  max-height: 96%;
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
  list-style: none;
  padding: 0;
  margin: 15px;
}

.languages li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.languages span {
  font-size: 1rem;
}

.languages .proficiency {
  color:rgb(44, 95, 149); /* Blue for distinction */
}

.proficiency {
  position: relative;
  cursor: pointer;
}

//experience summary section
.experience {
  margin: 5px;
  margin-bottom: 30px;
}

//experience sidebar
.experience-sidebar {
  margin: 5px;
  margin-bottom: 30px;
}

.striped-bar {
  position: relative;
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  margin-bottom: 30px; /* Add extra space for clarity */
  border-radius: 10px;
  overflow: visible; /* Ensure the scale isn't clipped */
  margin-bottom: 50px;
}

.bar {
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

.scale {
  display: flex;
  justify-content: space-between;
  position: relative; /* Ensure it's not hidden */
  margin-top: 5px; /* Create space below the bar */
  font-size: 12px;
  color: #333;
  z-index: 10; /* Ensure it's above other elements */
}

.scale span {
  text-align: center;
  flex: 1;
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
  margin-top:30px;
  margin-bottom: 20px;
}

.profile-picture img {
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Makes the image circular */
  object-fit: cover;
  border: 3px solid var(--profile-pic-border); /* Optional: Add a border */
  box-shadow: 1px -1px 10px 4px rgb(20 0 0 / 56%);
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
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 100px;
  max-width: 100%;
  text-align: justify;
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
  margin: 7px;
  padding: 10px;
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
  color: var(--section-text-color);
  border-bottom: 3px solid rgb(81, 156, 167);
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
  background-color: var(--footer-background); /* Use a custom color or theme variable */
  color: var(--footer-text-color); /* Use a custom text color or theme variable */
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
  background-color:var(--action-btn-bg);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;
}

.settings-btn:hover {
  background-color: var(--action-btn-hover-bg);
  transform: scale(1.1); /* Slight zoom effect on hover */
}

/* Settings Panel */
.settings-panel {
  position: fixed;
  bottom: 17vh; /* Space above the button */
  right: 3vw;
  width: fit-content; /* Responsive width */
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

  #skills {
  padding: 50px;
  background-color: #f9f9f9;
  border-radius: 10px;
  max-width: 900px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

#skills h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.skill-category {
  margin-bottom: 20px;
}

.skill-category h3 {
  font-size: 1.5rem;
  padding-top:10px;
  margin-bottom: 10px;
  text-transform: capitalize;
}

.skill-category {
  padding: 30px;
}

.skill-category p {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  padding:20px;
}

.skill-category strong {
  color: #333;
  font-weight: bold;
}

@media (max-width: 768px) {
  #skills {
    padding: 30px;
  }

  #skills h2 {
    font-size: 1.8rem;
  }

  .skill-category h3 {
    font-size: 1.3rem;
  }

  .skill-category p {
    font-size: 0.9rem;
  }
}
/* Timeline Container */
.timeline {
  position: relative;
  padding-left: 40px; /* Space for the line and dots */
}

/* Timeline Line */
.timeline::before {
  content: '';
  position: absolute;
  left: 20px; /* Adjust based on layout */
  top: 0;
  bottom: 0;
  width: 2px;
  background: #ddd; /* Line color */
}

/* Timeline Item */
.timeline-item {
  position: relative;
  margin-bottom: 2rem; /* Space between items */
}

/* Dot for Each Item */
.timeline-item::before {
  content: '';
  position: absolute;
  left: 15px; /* Adjust based on the line position */
  top: 0;
  width: 10px;
  height: 10px;
  background:rgba(85, 85, 85, 0); /* Dot color */
  border-radius: 50%; /* Makes it a circle */
  z-index: 1;
}

/* Date Section */
.timeline-date {
  margin-bottom: 1rem;
  font-weight: bold;
}

.timeline-date h1{
  margin-bottom: 1rem;
  font-weight: bold;
  color:rgb(3, 53, 62);
}

/* Content Section */
.timeline-content {
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

}


</style>
