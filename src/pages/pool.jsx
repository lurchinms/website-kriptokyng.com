import Head from "next/head";

import { PoolList } from "../components/pools";

export default function Pool() {
  return (
    <>
      <Head>
        <title>KriptoKyng | Pool</title>
      </Head>
      <PoolList />
    </>
  );
}
