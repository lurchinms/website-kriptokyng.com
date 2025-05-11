import Table from "react-bootstrap/Table";
import { useTranslation } from "../../src/context/TranslationContext"; // Import the useTranslation hook
import { toCurrentTimeZone } from "../../util/time";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export function BlockData({ data }) {
  const translations = useTranslation(); // Get the translations from context

  const { date, blockHeight, minerAddress, status, maturity, reward } =
    translations; // Destructure the translations
  const renderStatusArc = (progress) => (
    <div style={{ width: 50, height: 50, margin: "0 auto" }}>
      <CircularProgressbar
        value={progress}
        text={`${progress.toFixed(0)}%`}
        styles={buildStyles({
          textSize: "32px",
          pathColor: "#f7b801", // Yellow color for the arc
          textColor: "#fff", // Text color
          trailColor: "#333", // Background color
        })}
      />
    </div>
  );
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
              <th>0987654</th>
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
                <td>{renderStatusArc(block.confirmationProgress * 100)}</td>
                <td>{block.reward}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
