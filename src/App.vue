<template>
  <div id="app">
    <header>
      <h1>Your Name</h1>
      <p>Contact: your.email@example.com | (123) 456-7890</p>
    </header>
    <main>
      <section>
        <h2>Professional Summary</h2>
        <p>Your professional summary goes here.</p>
      </section>
      <section>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Company Name</strong> - Job Title
            <p>Description of your role and achievements.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Skills</h2>
        <p>List your skills here.</p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Add your CSS styles here */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
header {
  text-align: center;
  background-color: #f4f4f4;
  padding: 20px;
}
main {
  padding: 20px;
}
section {
  margin-bottom: 20px;
}
</style>
