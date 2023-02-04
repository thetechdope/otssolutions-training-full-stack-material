import React, { useEffect, useState } from "react";
import CustomersData from "../data/Customers";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChartComponent = () => {
  const [customersData, setCustomerData] = useState({});

  useEffect(() => {
    // Logic to call Customers API

    setCustomerData({
      labels: CustomersData.map((data) => data.month),
      datasets: [
        {
          label: "Number Of Customers Gained",
          data: CustomersData.map((data) => data.noOfCustomersGained),
        },
      ],
    });
  }, []);

  return (
    <div style={{ width: "800px" }}>
      {Object.keys(customersData).length > 0 && <Line data={customersData} />}
      {Object.values(customersData).length === 0 && (
        <h3>No. Customers Data Found</h3>
      )}
    </div>
  );
};

export default LineChartComponent;
