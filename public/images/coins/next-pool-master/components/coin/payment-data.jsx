import Table from "react-bootstrap/Table";

import { toCurrentTimeZone } from "../../util/time";

export function PaymentData({ data }) {
  return (
    <div className="row mt-3">
      <center>
        <h1 className="display-5" id="pool-payments">
          Pool Payments
        </h1>
      </center>
      <div className="glassfilter mx-auto p-3 mb-5">
        <Table size="md" responsive style={{ width: "100%" }}>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Miner Address</th>
              <th scope="col">Transaction ID</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((payment) => (
              <tr key={payment.id}>
                <td>{toCurrentTimeZone(payment.created)}</td>
                <td>{payment.address}</td>
                <td>
                  <a href={payment.transactionInfoLink} target="blank">
                    {payment.transactionConfirmationData.substring(0, 50)}
                  </a>
                </td>
                <td>{payment.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
