import { useTranslation } from "../src/context/TranslationContext";

export default function ApiInformation() {
  const { paragraphs } = useTranslation();
  return (
    <div className="container">
      <h1 className="p-3">API</h1>
      <div className="glassfilter mx-auto p-3 mb-5">
        <ul>
          <li>
            <b>/api/pools</b>
          </li>
          <p>{paragraphs[0]}</p>
          <li>
            <b>/api/pools/pool-id/blocks</b>
          </li>
          <p>{paragraphs[1]} </p>
          <li>
            <b>/api/pools/pool-id/payments</b>
          </li>
          <p>{paragraphs[2]} </p>
          <li>
            <b>/api/pools/pool-id/miners</b>
          </li>
          <p>{paragraphs[3]}</p>
          <li>
            <b>/api/pools/pool-id/performance</b>
          </li>
          <p>{paragraphs[4]}.</p>
          <li>
            <b>/api/pools/pool-id/miners/miner-wallet-address</b>
          </li>
          <p>{paragraphs[5]}</p>
          <li>
            <b>/api/pools/pool-id/miners/miner-wallet-address/payments</b>
          </li>
          <p>{paragraphs[6]}</p>
          <li>
            <b>/api/pools/pool-id/miners/miner-wallet-address/performance</b>
          </li>
          <p>{paragraphs[7]}</p>
        </ul>
      </div>
    </div>
  );
}
