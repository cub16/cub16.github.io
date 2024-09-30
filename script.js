const projects = [
  {
    name: "BookNow",
    desc: "A tool to download books from Wattpad.",
    url: "https://github.com/cub16/BookNow/",
  },
  {
    name: "Koto",
    desc: "A simple text editor",
    url: "https://cub16.github.io/Koto",
  },
];

projects.forEach((project, index) => {
  document.querySelector("#projects-container").innerHTML += `
    <div class="main__projects__container__element">
        <a href="${project.url}" target="_blank" class="main__projects__container__element__title">${project.name}</a>
        <p>${project.desc}</p>
    </div>
    `;
});
