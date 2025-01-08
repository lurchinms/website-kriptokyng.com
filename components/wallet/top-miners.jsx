import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { useTranslation } from "../../src/context/TranslationContext";
import { getTopMiners } from "../../util/api/public/pools";
import { fmtHash } from "../../util/common";

export function TopMiners({ pools }) {
  const topMiners = getTopMiners(pools);
  const { TopMiners } = useTranslation();
  return (
    <div className="row mt-3">
      <center>
        <h1 className="display-5">{TopMiners}</h1>
      </center>
      <div className="glassfilter mx-auto p-3 mb-5">
        <Table size="md" responsive style={{ width: "100%" }}>
          <tbody>
            {topMiners.map((m, i) => (
              <tr key={i}>
                <td>
                  <Image
                    src={`/images/coins/${m.coin}.png`}
                    alt="Coin Logo"
                    className="pool-logo"
                  />
                  {m.poolname}
                </td>
                <td>{m.miner.miner}</td>
                <td>{fmtHash(m.miner.hashrate, 2, "H/s")}</td>
                <td>{m.miner.sharesPerSecond}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
