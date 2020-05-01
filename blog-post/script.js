const postsContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

// Global variables
let limit = 5;
let page = 1;

// Fetch posts from API
async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

  const data = await res.json();

  return data;
}

// Show post and DOM
async function showPosts() {
  const posts = await getPosts();

  // Display into DOM
  posts.forEach(post => {
    // Create div
    const postEl = document.createElement('div');

    // Add post class
    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;

    postsContainer.appendChild(postEl);
  });
}

// Show loader & fetch more post
function showLoading() {
  // Add the class of show
  loading.classList.add('show');
  
  setTimeout(() => {
    loading.classList.remove('show');

    setTimeout(() => {
      page++;
      showPosts();
    }, 200);

  }, 1000);
};

// Filter post by input
function filterPosts(e) {
  const term = e.target.value.toUpperCase();

  // Get all of the post
  const posts = document.querySelectorAll('.post');

  // Loop through the node list array
  posts.forEach(post => {
    // Get title of the body
    const title = post.querySelector('.post-title').innerText.toUpperCase();
    const body = post.querySelector('.post-body').innerText.toUpperCase();

    // Match it to the term
    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = 'flex';
    } else {
      post.style.display = 'none';
    }
  });
};

// Show initial posts
showPosts();

window.addEventListener('scroll', () => {
  // console.log(document.documentElement.scrollTop);
  const { scrollTop, scrollHeight , clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    // Show the loader
    showLoading();
    // Fetch the rest of the post
  }       
});

filter.addEventListener('input', filterPosts);

