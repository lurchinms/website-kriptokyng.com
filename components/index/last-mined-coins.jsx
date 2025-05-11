import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import moment from "moment";
import { toCurrentTimeZone } from "../../util/time";
import { useTranslation } from "../../src/context/TranslationContext";
const getLastPoolBlockTime = (t) => {
  return t ? moment(moment.utc(t).toDate()).local().fromNow() : "Unavailable";
};

export function LastBlocks({ blocks }) {
  const { lastMintedBlocks, headers } = useTranslation();
  return (
    <div className="container mx-auto row mt-3">
      <center>
        <h1 className="display-5" text-info>
          {lastMintedBlocks}
        </h1>
      </center>
      <div className="glassfilter mx-auto p-3 mb-5">
        <Table size="md" responsive style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>{headers?.coin}</th>
              <th>{headers?.date}</th>
              <th>{headers?.blockHeight}</th>
              <th>{headers?.minerAddress}</th>
              <th>{headers?.status}</th>
              <th>{headers?.maturity}</th>
              <th>{headers?.reward}</th>
            </tr>
          </thead>
          <tbody>
            {blocks.map((block) => (
              <tr key={block.id}>
                <td>
                  <Image
                    src={`/images/coins/${block.poolId.toLowerCase()}.png`}
                    alt="coin Log"
                    className="pool-logo"
                  ></Image>
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
