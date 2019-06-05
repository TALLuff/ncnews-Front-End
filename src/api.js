import axios from "axios";

export const fetchArticles = async (query = undefined) => {
  const url = `https://nc-news-northcoders.herokuapp.com/api/articles`;
  const {
    data: { articles }
  } = await axios.get(url, { params: query });
  return articles;
};

export const fetchTopics = async () => {
  const url = `https://nc-news-northcoders.herokuapp.com/api/topics`;
  const {
    data: { topics }
  } = await axios.get(url);
  return topics;
};

export const fetchUser = async username => {
  const url = `https://nc-news-northcoders.herokuapp.com/api/users/${username}`;
  const {
    data: { user }
  } = await axios.get(url);
  return user;
};

export const fetchArticleById = async id => {
  const url = `https://nc-news-northcoders.herokuapp.com/api/articles/${id}`;
  const {
    data: { article }
  } = await axios.get(url);
  return article;
};

export const fetchArticlesComments = async id => {
  const url = `https://nc-news-northcoders.herokuapp.com/api/articles/${id}/comments`;
  const {
    data: { comments }
  } = await axios.get(url);
  return comments;
};

export const createArticleComment = async (id, commentInput) => {
  const url = `https://nc-news-northcoders.herokuapp.com/api/articles/${id}/comments`;
  const {
    data: { comment }
  } = await axios.post(url, commentInput);
  return [comment];
};

export const removeArticleComment = async id => {
  const url = `https://nc-news-northcoders.herokuapp.com/api/comments/${id}`;
  axios.delete(url);
};

export const updateVote = async (type, id, inc) => {
  const url = `https://nc-news-northcoders.herokuapp.com/api/${type}/${id}`;
  axios.patch(url, inc);
};

export const createArticle = async articleInput => {
  const url = `https://nc-news-northcoders.herokuapp.com/api/articles`;
  const {
    data: { article }
  } = await axios.post(url, articleInput);
  return [article];
};

export const removeArticle = async id => {
  const url = `https://nc-news-northcoders.herokuapp.com/api/articles/${id}`;
  axios.delete(url);
};
