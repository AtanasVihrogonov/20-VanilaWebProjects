const postsContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

// Global variables
let limit = 3;
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

  console.log(posts);
}

// Show initial posts
showPosts();
