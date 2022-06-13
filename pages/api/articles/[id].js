import { articles } from '../../../data';

export default function handler(req, res) {
  const { id } = req.query;
  const article = articles.find(article => article.id === id);
  
  console.log(article);
  if (article) {
    res.status(201).json(article);
  } else {
    res.status(404).json({ error: `Resource with id: ${id} couldn't be found`});
  }
  return res

}