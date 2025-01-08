import Table from "react-bootstrap/Table";

import { toCurrentTimeZone } from "../../util/time";

export function BlockData({ data }) {
  return (
    <div className="row mt-3">
      <center>
        <h1 className="display-5">Pool Blocks</h1>
      </center>
      <div className="glassfilter mx-auto p-3 mb-5">
        <Table size="md" responsive style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Block Height</th>
              <th>Miner Address</th>
              <th>Status</th>
              <th>Maturity</th>
              <th>Reward</th>
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
