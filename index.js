const data = [
  {
    id: "01",
    projectName: "Form Validator",
    url: "/form-validator/index.html"
  },
  {
    id: "02",
    projectName: "Movie Seat Booking",
    url: "/movie-seat-booking/index.html"
  },
  {
    id: "03",
    projectName: "Custom Video Player",
    url: "/video-player/index.html"
  },
  {
    id: "04",
    projectName: "Currency Converter",
    url: "/currency-converter/index.html"
  },
  {
    id: "05",
    projectName: "DOM Array Methods",
    url:"/dom-array-methods/index.html"
  },
  {
    id: "06",
    projectName: "Landing Page",
    url: "/modal-menu-slider/index.html"
  },
  {
    id: "07",
    projectName: "Hangman",
    url:"/hangman/index.html"
  },
  {
    id: "08",
    projectName: "Meal Finder",
    url: "/meal-finder/index.html"
  },
  {
    id: "09",
    projectName: "Expence Tracker",
    url: "/expense-tracker/index.html"
  },
  {
    id: "10",
    projectName: "Custom Music Player",
    url: "/music-player/index.html"
  },
  {
    id: "11",
    projectName: "Blog Post",
    url: "/blog-post/index.html"
  },
  {
    id: "12",
    projectName: "Typing Game",
    url: "/typing-game/index.html"
  },
  {
    id: "13",
    projectName: "Speech Text Reader",
    url: "/speech-reader/index.html"
  },
  {
    id: "14",
    projectName: "Memory Cards",
    url: "/memory-cards/index.html"
  },
  {
    id: "15",
    projectName: "Lyrics Search",
    url: "/lyrics-search/index.html"
  },
  {
    id: "16",
    projectName: "",
    url: ""
  },
  {
    id: "17",
    projectName: "",
    url: ""
  },
  {
    id: "18",
    projectName: "",
    url: ""
  },
  {
    id: "19",
    projectName: "",
    url: ""
  },
  {
    id: "20",
    projectName: "",
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
  `;
}

const renderPage = () => {
  const mainContentEl = document.querySelector("[data-selector='main-content']")
  const html = `
    <h1 class="p-4 text-center">Web Projects With Vanilla JavaScript</h1>
    <div class="row justify-content-center mt-5">
      ${data.map(renderProject).join("")}
    </div>
  `;
  mainContentEl.innerHTML = html
}

window.addEventListener('DOMContentLoaded', renderPage);




