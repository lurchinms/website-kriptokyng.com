import React from "react";

import { fmtHash } from "../../util/common";

import { Line } from "react-chartjs-2";
import { Chart, Filler } from "chart.js";

import {
  customFillGradient,
  CUSTOM_CANVAS_BACKGROUND_COLOR,
} from "../../util/charts";

import "chartjs-adapter-moment";

Chart.register(Filler);

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
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
      grid: {
        display: true,
      },
    },
    y: {
      ticks: {
        color: "#c9c9b7",
        callback: function (value) {
          return fmtHash(value, 1, "H/s");
        },
      },
      grid: {
        display: true,
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
      text: "Wallet Hashrate",
    },
  },
};

export function MinerInformationChart({ performance }) {
  // calculate worker hashrates
  const workerHashrates = performance.map((p) =>
    // get all worker names
    Object.keys(p.workers)
      // extract hashrates from those workers
      .map((w) => p.workers[w].hashrate)
      // sum those hashrates up
      .reduce((prev, curr) => prev + curr)
  );

  return (
    <Line
      style={{ height: 250 }}
      options={options}
      data={{
        labels: performance.map((p) => new Date(p.created)),
        datasets: [
          {
            maintainAspectRatio: false,
            label: "Wallet Hashrate",
            data: workerHashrates,
            fill: true,
            borderWidth: 1,
            backgroundColor: (context) => {
              return customFillGradient(
                context,
                {
                  "#abc2b3": 0,
                  "#ffffff": 0.8,
                },
                190
              );
            },
            borderColor: "rgba(97, 131, 161, 1.0)",
            pointRadius: 2,
            pointBackgroundColor: "rgba(241, 141, 143, 0.8)",
            tension: 0.2,
          },
        ],
      }}
    />
  );
}
