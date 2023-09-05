const baseUrl = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page = 1, size = 20) => {
  const response = await fetch(`${baseUrl}/posts?_page=${page}&_limit=${size}`);
  return await response.json();
};
