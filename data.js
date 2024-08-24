document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // Hero Section
      document.getElementById("hero-title").textContent = data.hero.title;
      document.getElementById("hero-subtitle").textContent = data.hero.subtitle;

      // About Section
      document.getElementById("about-title").textContent = data.about.title;
      document.getElementById("about-text").textContent = data.about.text;

      // Skills Section
      document.getElementById("skills-title").textContent = data.skills.title;

      // Code and Software Skills
      const iconosSoftware = document.getElementById("iconos_software");
      data.skills.codeSoftware.forEach((skill) => {
        const li = document.createElement("li");
        li.innerHTML = `<span><img src="${skill.icon}" alt=""></span><p>${skill.name}</p>`;
        iconosSoftware.appendChild(li);
      });

      // Aptitudes
      const aptitudes = document.getElementById("aptitudes");
      data.skills.aptitudes.forEach((aptitude) => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="${aptitude.icon}"></i><p>${aptitude.name}</p>`;
        aptitudes.appendChild(li);
      });
    })
    .catch((error) => console.error("Error fetching the JSON data:", error));
});
