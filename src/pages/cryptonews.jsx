import Head from "next/head";

import { NewsGrid } from "../components/news";

import { getNews } from "../util/api/internal/news";

export default function CryptoNews({ news }) {
  return (
    <>
      <Head>
        <title>KriptoKyng | News</title>
      </Head>
      <NewsGrid news={news} />
    </>
  );
}

export async function getServerSideProps() {
  const news = await getNews(crypto);
  return { props: { news } };
}
