import React from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import moment from "moment";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTranslation } from "../../src/context/TranslationContext";

const getLastPoolBlockTime = (t) => {
  return t ? moment(moment.utc(t).toDate()).local().fromNow() : "Unavailable";
};

export function LastBlocks({ blocks, theme }) {
  const { lastMintedBlocks, headers } = useTranslation();

  const renderStatusArc = (progress) => (
    <div style={{ width: 50, height: 50, margin: "0 auto" }}>
      <CircularProgressbar
        value={progress}
        text={`${progress.toFixed(0)}%`}
        styles={buildStyles({
          textSize: "28px",
          pathColor: "#f7b801",
          textColor: theme === "dark" ? "#E69706" : "#E69706", // Text color based on theme
          trailColor: theme === "dark" ? "#E69706" : "#E69706", // Trail color based on theme
        })}
      />
    </div>
  );

  return (
    <div className="container mx-auto row mt-3">
      <center>
        <h1
          className={`display-5 ${
            theme === "dark" ? "text-white" : "text-dark"
          }`}
        >
          {lastMintedBlocks}
        </h1>
      </center>
      <div
        className={`glassfilter mx-auto p-3 mb-5 ${
          theme === "dark" ? "dark-mode" : "light-mode"
        }`}
      >
        <Table
          size="md"
          responsive
          style={{ width: "100%" }}
          className={theme === "dark" ? "text-white" : "text-dark"}
        >
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
                  />
                </td>
                <td>{getLastPoolBlockTime(block.created)}</td>
                <td>
                  <a
                    href={block.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={theme === "dark" ? "text-light" : "text-dark"}
                  >
                    {block.blockHeight}
                  </a>
                </td>
                <td>{block.miner}</td>
                <td>{block.status}</td>
                <td className={`maturity-text`}>
                  {renderStatusArc(block.confirmationProgress * 100)}
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
