import Container from "react-bootstrap/Container";
import { BlockData, PaymentData } from "../../components/coin";
import { getPoolBlocks, getPoolPayments } from "../../util/api/public/pools";

export default function CoinInformation({ blockData, paymentData }) {
  return (
    <>
      <Container>
        <BlockData data={blockData} />
        <PaymentData data={paymentData} />
      </Container>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { blockID } = query;

  const [blockData, paymentData] = await Promise.all([
    getPoolBlocks(blockID),
    getPoolPayments(blockID),
  ]);

  return {
    props: { blockData, paymentData },
  };
}
