import styles from "../styles/Layout.module.css";
import ArticleList from "../components/ArticleList";
import { server } from '../config';

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `${server}/api/articles/`
  );

  const articles = await res.json();
  console.log(res);
  return {
    props: {
      articles,
    },
  };


// getStaticProps - Runs on build time.
// getServerSideProps - Runs on every request(similar to useEffect)
// getStaticPaths - Dynamically generates paths based on data we're fetching.

//Runs as soon as server is built. Doesn't get updated.
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/`
//   );

//   const articles = await res.json();
//   console.log(res);
//   return {
//     props: {
//       articles,
//     },
//   };
};
