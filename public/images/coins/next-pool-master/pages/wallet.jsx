import Head from "next/head";

import { MinerInformation, TopMiners } from "../components/wallet";

import { getPools } from "../util/api/public/pools";

export default function WalletPage({ pools }) {
  return (
    <>
      <Head>
        <title>KriptoKyng | Wallet</title>
      </Head>
      <div className="container">
        <MinerInformation pools={pools} />
        <TopMiners pools={pools} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const pools = await getPools();
  return { props: { pools } };
}
