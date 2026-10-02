import axios from 'axios';

export const getArticles = async (query, page) => {
  const baseUrl = 'https://newsapi.org/v2';
  const endPoint = '/everything';
  const url = baseUrl + endPoint;

  const params = {
    apiKey: '***',
    q: query,
    page: page,
    pageSize: 10,
  };

  const res = await axios.get(url, { params });
  return res.data;
};
