<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><a href="#summary">{{ $t('summary') }}</a></li>
          <li><a href="#experience">{{ $t('experience') }}</a></li>
          <li><a href="#skills">{{ $t('skills') }}</a></li>
          <li><a href="#education">{{ $t('education') }}</a></li>
        </ul>
      </nav>
      <div class="intro">
        <h1>AINI MD. RAZALI</h1>
        <p>Contact: ainizarel96@gmail.com | (+6) 013-4919140</p>
        <a class="action-btn" href="#summary">View My Work</a>
      </div>
      <!-- Language Selector -->
      <div class="language-switcher">
        <button @click="changeLanguage('en')">English</button>
        <button @click="changeLanguage('malay')">Malaysia</button>
      </div>
    </header>
    <main>
      <section id="summary">
        <h2>{{ $t('summary') }}</h2>
        <p>{{ $t('professionalSummaryText') }}</p>
      </section>
      <section id="experience">
        <h2>{{ $t('experience') }}</h2>
        <ul>
          <li>
            <strong>Company ABC</strong> - Software Engineer
            <p>Developed scalable solutions for client projects, resulting in increased efficiency by 20%.</p>
          </li>
          <li>
            <strong>Company XYZ</strong> - Intern
            <p>Collaborated on a project to streamline processes, reducing lead times by 15%.</p>
          </li>
        </ul>
      </section>
      <section id="skills">
        <h2>{{ $t('skills') }}</h2>
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
        <h2>{{ $t('education') }}</h2>
        <p><strong>University Name</strong> - Bachelor's Degree in [Field of Study]</p>
      </section>
    </main>
    <footer>
      <p>{{ $t('connectWithMe') }}</p>
      <ul>
        <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com" target="_blank">GitHub</a></li>
        <li><a href="mailto:ainizare96@gmail.com">Email</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Dynamically update the language
    },
  },
};
</script>
