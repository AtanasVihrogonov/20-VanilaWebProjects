const data = [
  {
    id: "1",
    projectName: "Form Validator",
    url: "/form-validator/index.html"
  },
  {
    id: "2",
    projectName: "Movie Seat Booking",
    url: "/movie-seat-booking/index.html"
  },
  {
    id: "3",
    projectName: "Custom Video Player",
    url: "/video-player/index.html"
  },
  {
    id: "4",
    projectName: " ",
    url: ""
  },
  {
    id: "5",
    projectName: " ",
    url:""
  },
  {
    id: "6",
    projectName: " ",
    url: ""
  },
  {
    id: "7",
    projectName: " ",
    url:""
  },
  {
    id: "8",
    projectName: " ",
    url: ""
  },
  {
    id: "9",
    projectName: " ",
    url: ""
  },
  {
    id: "10",
    projectName: " ",
    url: ""
  },
  {
    id: "11",
    projectName: " ",
    url: ""
  },
  {
    id: "12",
    projectName: " ",
    url: ""
  },
  {
    id: "13",
    projectName: " ",
    url: ""
  },
  {
    id: "14",
    projectName: " ",
    url: ""
  },
  {
    id: "15",
    projectName: " ",
    url: ""
  },
  {
    id: "16",
    projectName: " ",
    url: ""
  },
  {
    id: "17",
    projectName: " ",
    url: ""
  },
  {
    id: "18",
    projectName: " ",
    url: ""
  },
  {
    id: "19",
    projectName: " ",
    url: ""
  },
  {
    id: "20",
    projectName: " ",
    url: ""
  }
]

const renderProject = item => {
  return `
  <div class="col-md-6">
    <div class="alert alert-secondary" role="alert">
      ${item.id}. ${item.projectName}
      <button
        type="button"
        class="btn bg-light text-dark py-0 float-right"
      >
        <a href="${item.url}"> Live Demo</a>
      </button>
    </div>
  </div>
  `
}

const renderPage = ()=> {
  const mainContentEl = document.querySelector("[data-selector='main-content']")
  console.log(mainContentEl);

  const html = `
  <h1 class="p-4 text-center">Web Projects With Vanilla JavaScript</h1>
  <div class="row justify-content-center mt-5">
    ${data.map(renderProject).join("")}
  </div>
  `
  mainContentEl.innerHTML = html
}

window.addEventListener('DOMContentLoaded', renderPage);




