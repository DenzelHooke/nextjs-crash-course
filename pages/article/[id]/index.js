import { useRouter } from "next/router";
import { server } from '../../../config/index';
import Link from "next/link";
import Meta from '../../../components/Meta';

const article = ({ article }) => {
  // const router = useRouter();
  // const {id} = router.query;

  
  return (
    <>
      <Meta title={`Web Dev | ${article.title}`} />
      <h1>
        {article.title}
      </h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>+
    </>
  );
};


export const getStaticProps = async (context) => {
  const res = await fetch(
    `${server}/api/articles/${context.params.id}`
  );

  const article = await res.json();
  console.log(article);

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  //Creates paths for all posts in the api, returns 404 of query doesnt match post id.

  const res = await fetch(`${server}/api/articles/`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  // console.log(ids, paths);

  return {
    paths,
    fallback: false,
  };
};




//Runs on every page refresh / load.
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     }
//   }
// }

//Runs on server build time.

//getStaticPaths builds a list of objects like such on build time[
// {params: {id: 1}},
// {params: {id: 2}},
// {params: {id: 3}},
// {params: {id: 4}},
// ]

// Get static props will go through all of the objects on build time from getStaticPaths
//  and call this function for each article path param that getStaticPaths created. All of these paths are now pre-rendered server-side and load extremely fast.

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();
//   console.log(article);

//   return {
//     props: {
//       article,
//     },
//   };
// };

//Creates a paths dynamically.
// export const getStaticPaths = async () => {
//   //Creates paths for all posts in the api, returns 404 of query doesnt match post id.

//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({
//     params: {
//       id: id.toString(),
//     },
//   }));
//   // console.log(ids, paths);

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default article;
