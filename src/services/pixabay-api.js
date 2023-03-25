const API_KEY = '34545870-119085d20c8b698f5f0258aeb';
const BASE_URL = 'https://pixabay.com/api';

export const fetchImg = (query, page, perPage) => {
  const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${API_KEY}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Oops! Nothing found'));
  });
};
