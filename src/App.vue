<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><a href="#summary">Summary</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
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
        <button @click="changeLanguage('es')">Español</button>
      </div>
    </header>
    <main>
      <section id="summary">
        <h2>Professional Summary</h2>
        <p>
          A highly motivated professional with proven expertise in [Your Field]. Adept at [list your key strengths or professional highlights].
        </p>
      </section>
      <section id="experience">
        <h2>Work Experience</h2>
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
    <footer>
      <p>Connect with me:</p>
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
};
</script>

<style>
/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  color: #333;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: #4CAF50;
}

/* Header */
header {
  background: linear-gradient(to right, #4CAF50, #81C784);
  color: white;
  padding: 20px 0;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav ul li {
  display: inline;
}

nav ul li a {
  font-weight: bold;
  color: white;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #f7f7f7;
}

.intro h1 {
  margin: 0;
}

.action-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #fff;
  color: #4CAF50;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.action-btn:hover {
  background-color: #4CAF50;
  color: white;
}

/* Main Content */
main {
  padding: 20px;
  max-width: 800px;
  margin: auto;
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
footer {
  text-align: center;
  padding: 20px;
  background-color: #4CAF50;
  color: white;
}

footer ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

footer ul li a {
  color: white;
  font-weight: bold;
  transition: color 0.3s;
}

footer ul li a:hover {
  color: #81C784;
}
</style>
