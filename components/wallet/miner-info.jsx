// import { useState, useEffect } from "react";
// import { useTranslation } from "../../src/context/TranslationContext";
// import Form from "react-bootstrap/Form";
// import Table from "react-bootstrap/Table";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// import { MinerInformationChart } from "./miner-info-chart.jsx";

// import { fmtHash } from "../../util/common";
// import { fmtPaymentDate } from "../../util/time";

// import { getWallet, getWalletPayments } from "../../util/api/public/wallet";

// export function MinerInformation({ pools }) {
//   const [selectedPool, setSelectedPool] = useState("");
//   const [walletAddress, setWalletAddress] = useState("");
//   const [walletInformation, setWalletInformation] = useState(null);
//   const [payments, setPayments] = useState([]);
//   const {
//     walletInformationtitle,
//     walletInformationdescription,
//     walletAddressPlaceholder,
//     selectPool,
//     pendingShares,
//     pendingBalance,
//     paidToday,
//     lifetimeBalance,
//     workersTitle,
//     paymentsTitle,
//     performanceSamples,
//     paymentId,
//     paymentDate,
//     paymentAmount,
//   } = useTranslation();
//   useEffect(() => {
//     if (!selectedPool || !walletAddress) return;

//     (async () => {
//       const wallet = await getWallet(walletAddress, selectedPool);
//       if (wallet.lastPayment == null) setWalletInformation(null);

//       setWalletInformation(wallet);

//       const paymentsData = await getWalletPayments(walletAddress, selectedPool);
//       setPayments(paymentsData);
//     })();
//   }, [selectedPool, walletAddress]);

//   return (
//     <div className="container">
//       <div className="justify-content-center">
//         <div className="row mt-3">
//           <center>
//             <h1 className="display-5">{walletInformationtitle}</h1>
//             <p>{walletInformationdescription}</p>
//             <div className="mx-auto box p-3">
//               <input
//                 type="text"
//                 placeholder={walletAddressPlaceholder}
//                 className="mx-2 wallet-address-input"
//                 value={walletAddress}
//                 onChange={(e) => {
//                   setWalletAddress(e.target.value);
//                 }}
//               />
//               <Form.Select
//                 className="box search"
//                 value={selectedPool}
//                 onChange={(e) => {
//                   setSelectedPool(e.target.value);
//                 }}
//                 aria-label="Select a pool"
//               >
//                 <option>{selectPool}</option>
//                 {pools?.map((c) => (
//                   <option key={c.id} value={c.id}>
//                     {c.id}
//                   </option>
//                 ))}
//               </Form.Select>
//             </div>
//           </center>
//           {walletInformation && (
//             <>
//               <div className="mt-5">
//                 <Row>
//                   <Col>
//                     <h1 className="display-5">{pendingShares}:</h1>
//                     <p>{walletInformation.pendingShares}</p>
//                     <h1 className="display-5">{pendingBalance}:</h1>
//                     <p>{walletInformation.pendingBalance}</p>
//                   </Col>
//                   <Col>
//                     <h1 className="display-5">{paidToday}:</h1>
//                     <p>{walletInformation.todayPaid}</p>
//                     <h1 className="display-5">{lifetimeBalance}:</h1>
//                     <p>{walletInformation.totalPaid}</p>
//                   </Col>
//                 </Row>
//               </div>
//               <div className="glassfilter mx-auto p-3 mt-5">
//                 <MinerInformationChart
//                   performance={walletInformation.performanceSamples}
//                 />
//               </div>

//               <div className="mt-5">
//                 <Row>
//                   <Col>
//                     <h1 className="display-5">{workersTitle}</h1>
//                     <Table size="md" responsive style={{ width: "50%" }}>
//                       <tbody>
//                         {Object.keys(
//                           walletInformation?.performance?.workers ?? {}
//                         ).map((worker) => (
//                           <tr key={worker}>
//                             <td>{worker}</td>
//                             <td>
//                               {fmtHash(
//                                 walletInformation.performance.workers[worker]
//                                   .hashrate,
//                                 2,
//                                 "H/s"
//                               )}
//                             </td>
//                             <td>
//                               {
//                                 walletInformation.performance.workers[worker]
//                                   .sharesPerSecond
//                               }
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </Col>
//                   <Col>
//                     <h1 className="display-5">{paymentsTitle}</h1>
//                     {walletInformation && (
//                       <div className="">
//                         <Table size="md" responsive style={{ width: "50%%" }}>
//                           <tbody>
//                             {payments.map((payment) => (
//                               <tr key={payment.id}>
//                                 <td>{payment.id}</td>
//                                 <td>{fmtPaymentDate(payment.created)}</td>
//                                 <td>{payment.amount}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </Table>
//                       </div>
//                     )}
//                   </Col>
//                 </Row>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { MinerInformationChart } from "./miner-info-chart.jsx";

import { fmtHash } from "../../util/common";
import { fmtPaymentDate } from "../../util/time";

import { getWallet, getWalletPayments } from "../../util/api/public/wallet";

export function MinerInformation({ pools }) {
  const [selectedPool, setSelectedPool] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [walletInformation, setWalletInformation] = useState(null);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    if (!selectedPool || !walletAddress) return;

    (async () => {
      const wallet = await getWallet(walletAddress, selectedPool);
      if (wallet.lastPayment == null) setWalletInformation(null);

      setWalletInformation(wallet);

      const paymentsData = await getWalletPayments(walletAddress, selectedPool);
      setPayments(paymentsData);
    })();
  }, [selectedPool, walletAddress]);

  return (
    <div className="container">
      <div className="justify-content-center">
        <div className="row mt-3">
          <center>
            <h1 className="display-5">Wallet Information</h1>
            <p>Type your wallet address and select the pool you are mining.</p>
            <div className="mx-auto box p-3">
              <input
                type="text"
                placeholder=" Wallet address"
                className="mx-2 wallet-address-input"
                value={walletAddress}
                onChange={(e) => {
                  setWalletAddress(e.target.value);
                }}
              />
              <Form.Select
                className="box search"
                value={selectedPool}
                onChange={(e) => {
                  setSelectedPool(e.target.value);
                }}
                aria-label="Select a pool"
              >
                <option>Select a pool</option>
                {pools?.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.id}
                  </option>
                ))}
              </Form.Select>
            </div>
          </center>
          {walletInformation && (
            <>
              <div className="mt-5">
                <Row>
                  <Col>
                    <h1 className="display-5">Pending shares:</h1>
                    <p>{walletInformation.pendingShares}</p>
                    <h1 className="display-5">Pending balance:</h1>
                    <p>{walletInformation.pendingBalance}</p>
                  </Col>
                  <Col>
                    <h1 className="display-5">Paid today:</h1>
                    <p>{walletInformation.todayPaid}</p>
                    <h1 className="display-5">Lifetime balance:</h1>
                    <p>{walletInformation.totalPaid}</p>
                  </Col>
                </Row>
              </div>
              <div className="glassfilter mx-auto p-3 mt-5">
                <MinerInformationChart
                  performance={walletInformation.performanceSamples}
                />
              </div>

              <div className="mt-5">
                <Row>
                  <Col>
                    <h1 className="display-5">Workers</h1>
                    <Table size="md" responsive style={{ width: "50%" }}>
                      <tbody>
                        {Object.keys(
                          walletInformation?.performance?.workers ?? {}
                        ).map((worker) => (
                          <tr key={worker}>
                            <td>{worker}</td>
                            <td>
                              {fmtHash(
                                walletInformation.performance.workers[worker]
                                  .hashrate,
                                2,
                                "H/s"
                              )}
                            </td>
                            <td>
                              {
                                walletInformation.performance.workers[worker]
                                  .sharesPerSecond
                              }
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                  <Col>
                    <h1 className="display-5">Payments</h1>
                    {walletInformation && (
                      <div className="">
                        <Table size="md" responsive style={{ width: "50%%" }}>
                          <tbody>
                            {payments.map((payment) => (
                              <tr key={payment.id}>
                                <td>{payment.id}</td>
                                <td>{fmtPaymentDate(payment.created)}</td>
                                <td>{payment.amount}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    )}
                  </Col>
                </Row>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
