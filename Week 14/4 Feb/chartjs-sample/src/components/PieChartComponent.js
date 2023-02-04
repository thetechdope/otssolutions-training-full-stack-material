import React from "react";
import CustomersData from "../data/Customers";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChartComponent = () => {
  const customersData = {
    labels: CustomersData.map((data) => data.month),
    datasets: [
      {
        label: "Number Of Customers Gained",
        data: CustomersData.map((data) => data.noOfCustomersGained),
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "orange",
          "red",
          "grey",
          "purple",
          "cyan",
          "green",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      // {
      //   label: "Number Of Customers Lost",
      //   data: CustomersData.map((data) => data.noOfCustomersLost),
      // },
      // {
      //   label: "Tablets (Thousands)",
      //   data: [400, 345, 716, 180, 157, 409],
      // },
    ],
  };

  return (
    <div style={{ width: "800px" }}>
      <Pie data={customersData} />
    </div>
  );
};

export default PieChartComponent;
