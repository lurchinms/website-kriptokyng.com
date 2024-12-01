import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import moment from "moment";
import { toCurrentTimeZone } from "../../util/time";

const getLastPoolBlockTime = (t) => {
  return t ? moment(moment.utc(t).toDate()).local().fromNow() : "Unavailable";
};

export function LastBlocks({ blocks }) {
  return (
    <div className="container mx-auto row mt-3">
      <center>
        <h1 className="display-5" text-info>Last Minted Blocks</h1>
      </center>
      <div className="glassfilter mx-auto p-3 mb-5">
        <Table size="md" responsive style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Date</th>
              <th>Block Height</th>
              <th>Miner Address</th>
              <th>Status</th>
              <th>Maturity</th>
              <th>Reward</th>
            </tr>
          </thead>
          <tbody>
            {blocks.map((block) => (
              <tr>
                <td>
                  <Image
                        src={`/images/coins/${block.poolId.toLowerCase()}.png`}
                        alt="coin Log"
                        className="pool-logo"></Image>
                </td>
                <td>{getLastPoolBlockTime(block.created)}</td>
                <td>
                  <a
                    href={block.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {block.blockHeight}
                  </a>
                </td>
                <td>{block.miner}</td>
                <td>{block.status}</td>
                <td>
                  {(block.confirmationProgress.toFixed(2) * 100).toFixed(0)}%
                </td>

                <td>{block.reward}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
