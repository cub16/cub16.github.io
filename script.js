const projects = [
  {
    icon: "🌃",
    name: "Lumina",
    desc: "Lightweight notes",
    langs: ["HTML", "CSS", "JS"],
    url: "https://cub16.github.io/Lumina",
  },
  {
    icon: "📖",
    name: "BookNow",
    desc: "Wattpad Book Downloader",
    langs: ["PYTHON"],
    url: "https://github.com/cub16/BookNow"
  }
];

projects.forEach((project) => {
  document.querySelector("#projects").innerHTML += `
    <div class="project" onclick="location.href='${project.url}'">
        <h3>${project.name} ${project.icon}</h3>
        <p>${project.desc}</p>
        <p>${project.langs}</p>
    </div>
  `;
});
