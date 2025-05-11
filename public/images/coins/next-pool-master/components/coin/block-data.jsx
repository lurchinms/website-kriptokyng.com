import Table from "react-bootstrap/Table";
import { useTranslation } from "../../src/context/TranslationContext"; // Import the useTranslation hook
import { toCurrentTimeZone } from "../../util/time";

export function BlockData({ data }) {
  const translations = useTranslation(); // Get the translations from context

  const { date, blockHeight, minerAddress, status, maturity, reward } =
    translations; // Destructure the translations

  return (
    <div className="row mt-3">
      <center>
        <h1 className="display-5">{translations.poolBlocks}</h1>{" "}
        {/* Translating title */}
      </center>
      <div className="glassfilter mx-auto p-3 mb-5">
        <Table size="md" responsive style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>{date}</th>
              <th>{blockHeight}</th>
              <th>{minerAddress}</th>
              <th>{status}</th>
              <th>{maturity}</th>
              <th>{reward}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((block) => (
              <tr key={block.id}>
                <td>{toCurrentTimeZone(block.created)}</td>
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
