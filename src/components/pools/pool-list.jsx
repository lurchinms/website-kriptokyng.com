// TODO: refactor this file

import { Fragment, useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

import { Chart, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

import "chartjs-adapter-moment";

import moment from "moment";
import { fmtHash } from "../../util/common";

import Link from "next/link";

import {
  CUSTOM_CANVAS_BACKGROUND_COLOR,
  customFillGradient,
} from "../../util/charts";

import { RefreshTimer } from "../../components/shared/common";

import { getPoolPerformance, getPools } from "../../util/api/public/pools";

Chart.register(Filler);

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  CUSTOM_CANVAS_BACKGROUND_COLOR
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      type: "time",
      time: {
        unit: "hour",
      },
      ticks: {
        color: "#c9c9b7",
      },
    },
    y: {
      ticks: {
        color: "#c9c9b7",
        callback: function (value) {
          return fmtHash(value, 1, "H/s");
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Pool Hashrate",
    },
  },
};

const getLastPoolBlockTime = (t) => {
  return t ? moment(moment.utc(t).toDate()).local().fromNow() : "Unavailable";
};

export function PoolList() {
  const refreshRate = 300;

  const [rowData, setRowData] = useState([]);
  const [openRow, setOpenRow] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPools, setFilteredPools] = useState([]);

  const [currentRowInfo, setCurrentRowInfo] = useState({
    performance: null,
    ports: [],
  });

  useEffect(() => {
    const cachedPools = JSON.parse(
      window.localStorage.getItem("pools") ?? "[]"
    );

    if (cachedPools.lenght) {
      setRowData(cachedPools);
      setFilteredPools(cachedPools);
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const pools = await getPools();

    for (let i = 0; i < pools.length; i++) {
      pools[i].performance = await getPoolPerformance(pools[i].id);
    }

    setRowData(pools);
    setFilteredPools(pools);

    window.localStorage.setItem("pools", JSON.stringify(pools));
  };

  const onChangeQuery = (query) => {
    setSearchQuery(query);
    setFilteredPools(
      rowData.filter((pool) =>
        pool.coin.canonicalName.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const openTable = async (i, r) => {
    let row = openRow;
    setOpenRow(null);

    if (row === i) {
      return;
    }

    setOpenRow(i);

    setCurrentRowInfo({
      ports: Object.keys(r.ports).map((k) => ({
        url: `stratum+tcp://kriptokyng.com:${k}`,
        difficulty: r.ports[k].difficulty,
      })),
    });
  };

  return (
    <div className="container">
      {filteredPools.length > 0 && (
        <RefreshTimer
          time={refreshRate}
          onComplete={async () => {
            fetchData();
          }}
        />
      )}
      <div className="justify-content-center">
        <div className="row mt-5">
          <Form.Control
            value={searchQuery}
            className="box search"
            type="text"
            onChange={(e) => {
              onChangeQuery(e.target.value);
            }}
            placeholder="Search For a Crypto Currency.."
          />
        </div>
      </div>
      <div className="row mt-3 px-3 px-sm-0">
        <div className="glassfilter mx-auto p-3 mb-5">
          <Table size="md" responsive style={{ width: "100%" }}>
            <thead>
              <tr>
                <th scope="col">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name
                </th>
                <th scope="col">Pool Hashrate</th>
                <th scope="col">Network Hashrate</th>
                <th scope="col">Algorithm</th>
                <th scope="col">Pool Block</th>
                <th scope="col">Coin Information</th>
              </tr>
            </thead>
            <tbody>
              {filteredPools.map((r, i) => (
                <Fragment key={i}>
                  <tr key={i}>
                    <td>
                      <i
                        className="fas fa-chevron-right"
                        onClick={() => {
                          openTable(i, r);
                        }}
                        aria-controls={`collapseRow${i}`}
                        aria-expanded={i === openRow}
                      ></i>
                      <Image
                        src={`/images/coins/${r.coin.symbol.toLowerCase()}.png`}
                        alt="Coin Logo"
                        className="pool-logo"
                        onClick={() => {
                          openTable(i, r);
                        }}
                        aria-controls={`collapseRow${i}`}
                        aria-expanded={i === openRow}
                      />{" "}
                      {r.coin.canonicalName}
                    </td>
                    <td>{fmtHash(r.poolStats.poolHashrate, 2, "H/s")}</td>
                    <td>{fmtHash(r.networkStats.networkHashrate, 2, "H/s")}</td>
                    <td>{r.coin.algorithm}</td>
                    <td>{getLastPoolBlockTime(r.lastPoolBlockTime)}</td>
                    <td>
                      <Link
                        className="links"
                        href={`/coin/${r.coin.canonicalName.toLowerCase()}?blockID=${
                          r.id
                        }&coinSymbol=${r.coin.symbol}`}
                      >
                        Blocks
                      </Link>{" "}
                      |{" "}
                      <Link
                        className="links"
                        href={`/coin/${r.coin.canonicalName.toLowerCase()}?blockID=${
                          r.id
                        }&coinSymbol=${r.coin.symbol}#pool-payments`}
                      >
                        Payments
                      </Link>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={12} className="col-expandable">
                      <div>
                        <Collapse in={i === openRow}>
                          <div
                            id={`collapseRow${i}`}
                            className="col-expandable-content"
                          >
                            <Row className="align-items-top">
                              <div className="col-lg-6 col-md-12">
                                <Col>
                                  {r?.performance && (
                                    <Line
                                      options={options}
                                      data={{
                                        labels: r.performance.map(
                                          (p) => new Date(p.created)
                                        ),
                                        datasets: [
                                          {
                                            maintainAspectRatio: false,
                                            label: "Pool Hashrate",
                                            data: r.performance.map(
                                              (p) => p.poolHashrate
                                            ),
                                            fill: true,
                                            borderWidth: 1,
                                            backgroundColor: (context) => {
                                              return customFillGradient(
                                                context,
                                                {
                                                  // put colors in here,
                                                  // first goes the color, then the percentage
                                                  "#abc2b3": 0,
                                                  "#ffffff": 0.8,
                                                  // the last argument is the degree.
                                                },
                                                190
                                              );
                                            },
                                            borderColor:
                                              "rgba(97, 131, 161, 1.0)",
                                            pointRadius: 2,
                                            pointBackgroundColor:
                                              "rgba(241, 141, 143, 0.8)",
                                            tension: 0.2,
                                          },
                                        ],
                                      }}
                                    />
                                  )}
                                </Col>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                <Row>
                                  <small className="data-tag">
                                    Pool Address:{" "}
                                  </small>
                                  {currentRowInfo.ports &&
                                    currentRowInfo.ports.map((port) => (
                                      <>
                                        <p
                                          className="data"
                                          style={{
                                            marginBottom: 4,
                                          }}
                                        >
                                          {port.url}
                                        </p>
                                        <p
                                          className="data"
                                          style={{
                                            fontSize: 12,
                                          }}
                                        >
                                          Difficulty: {port.difficulty}
                                        </p>
                                      </>
                                    ))}
                                </Row>
                                <Row>
                                  <Col>
                                    <small className="data-tag">
                                      Difficulty:
                                    </small>
                                    <p className="data">
                                      {fmtHash(
                                        r.networkStats.networkDifficulty,
                                        3,
                                        ""
                                      )}
                                    </p>
                                  </Col>
                                  <Col>
                                    <small className="data-tag">
                                      Network Hashrate:
                                    </small>
                                    <p className="data">
                                      {fmtHash(
                                        r.networkStats.networkHashrate,
                                        2,
                                        "H/s"
                                      )}
                                    </p>
                                  </Col>
                                  <Col>
                                    <small className="data-tag">Reward:</small>
                                    <p className="data">
                                      {r.networkStats.blockReward}{" "}
                                      {r.coin.symbol.toUpperCase()}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <small className="data-tag">
                                      Block Height:
                                    </small>
                                    <p className="data">
                                      {r.networkStats.blockHeight}
                                    </p>
                                  </Col>
                                  <Col>
                                    <small className="data-tag">
                                      Block Time:
                                    </small>
                                    <p className="data">secs</p>
                                  </Col>
                                  <Col>
                                    <small className="data-tag">
                                      Last Pool Block:
                                    </small>
                                    <p className="data">
                                      {getLastPoolBlockTime(
                                        r.lastPoolBlockTime
                                      )}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <small className="data-tag">
                                      Round Effort:
                                    </small>
                                    <p className="data">
                                      {r.poolEffort.toFixed(1)}%
                                    </p>
                                  </Col>
                                  <Col>
                                    <small className="data-tag">
                                      Connections:
                                    </small>
                                    <p className="data">
                                      {r.networkStats.connectedPeers}
                                    </p>
                                  </Col>
                                  <Col>
                                    <small className="data-tag">
                                      Total Paid:
                                    </small>
                                    <p className="data">
                                      {fmtHash(r.totalPaid, 2, "")}{" "}
                                      {r.coin.symbol.toUpperCase()}
                                    </p>
                                  </Col>
                                  <Row></Row>
                                  <Col>
                                    <ul className="pool-icons">
                                      <li>
                                        <a
                                          href={r.coin.website}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <i className="fa fa-house-user"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href={r.addressInfoLink}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <i className="fa fa-address-card"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href={r.coin.market}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <i className="fa fa-chart-line"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href={r.coin.discord}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <i className="fab fa-discord"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href={r.coin.telegram}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <i className="fa fa-telegram"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href={r.coin.twitter}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <i className="fab fa-twitter"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </Col>
                                </Row>
                              </div>
                            </Row>
                          </div>
                        </Collapse>
                      </div>
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
