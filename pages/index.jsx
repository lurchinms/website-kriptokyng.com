import Head from "next/head";

import { Banner, Hero, LastBlocks, LatestNews } from "../components/index";
import { PoolList } from "../components/pools";
import { Whisper } from 'next/font/google'

import { getNews } from "../util/api/internal/news";
import { getBlocks } from "../util/api/public/blocks";

export default function Home({ news, blocks }) {
  return (
    <>
      <Head>
        <title>KriptoKyng | Home</title>

      </Head>
      <Hero />
      <PoolList />
      <Banner />
      <LastBlocks blocks={blocks} />
      <LatestNews news={news} />
    </>
  );
}

export async function getServerSideProps() {
  const blocks = await getBlocks();
  const news = await getNews();
  return { props: { blocks, news: news.slice(0, 6) } };
}
