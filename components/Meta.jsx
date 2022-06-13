import Head from "next/head";

import React from "react";

const Meta = ({ title }) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'WebDev Newzzzz',
  keywords: 'web development, programming, node.js',
  description: 'Web dev news simplified.',
}

export default Meta;
