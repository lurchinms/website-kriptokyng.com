import Table from "react-bootstrap/Table";
import { useTranslation } from "../../src/context/TranslationContext";
import { toCurrentTimeZone } from "../../util/time";

export function PaymentData({ data }) {
  const { PoolPayments, TransactionID, Amount, date, minerAddress } =
    useTranslation();
  return (
    <div className="row mt-3">
      <center>
        <h1 className="display-5" id="pool-payments">
          {PoolPayments}
        </h1>
      </center>
      <div className="glassfilter mx-auto p-3 mb-5">
        <Table size="md" responsive style={{ width: "100%" }}>
          <thead>
            <tr>
              <th scope="col">{date}</th>
              <th scope="col">{minerAddress}</th>
              <th scope="col">{TransactionID}</th>
              <th scope="col">{Amount}</th>
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
