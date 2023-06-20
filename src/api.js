import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID mWJ-XHQII6HzTTMf6vaJeAQ7uagfU2ZsjtHBFe7jc50'
    },
    params: {
      query: term,
    }
  });

  return response.data.results;
};

export default searchImages;