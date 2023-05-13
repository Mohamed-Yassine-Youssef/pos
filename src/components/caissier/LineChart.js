import React, { useState, useEffect } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  const [filteredData, setFilteredData] = useState({});

  const [Week, setWeek] = useState("");
  const [Month, setMonth] = useState("");
  const [Year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Filter data based on selected filter
    const newFilteredData = {};
    for (const line in data) {
      newFilteredData[line] = {};
      for (const date in data[line]) {
        const d = new Date(date);
        const y = d.getFullYear().toString();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const w = String(Math.ceil(d.getDate() / 7)).padStart(2, "0");

        if (y !== Year) continue;
        if (Month && m !== Month) continue;
        if (Week && w !== Week) continue;

        newFilteredData[line][date] = data[line][date];
      }
    }
    setFilteredData(newFilteredData);
  }, [data, Week, Month, Year]);
  const chartData = {
    datasets: [
      {
        label: "Objectif",
        data: filteredData.line1,
        fill: false,
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Chiffre d'affaire Actuelle",
        data: filteredData.line2,
        fill: false,
        borderColor: "blue",
        backgroundColor: "blue",
      },
    ],
  };
  const handleChangeWeek = (event) => {
    setWeek(event.target.value);
  };
  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };
  return (
    <>
      <div className="card p-3">
        <div className="row ">
          <div className="col-4">
            <select
              value={Year}
              onChange={handleChangeYear}
              className="form-control "
            >
              <option value={new Date().getFullYear()}>
                {new Date().getFullYear()}
              </option>
              <option value={new Date().getFullYear() - 1}>
                {new Date().getFullYear() - 1}
              </option>
              <option value={new Date().getFullYear() - 2}>
                {new Date().getFullYear() - 2}
              </option>
              <option value={new Date().getFullYear() - 3}>
                {new Date().getFullYear() - 3}
              </option>
            </select>
          </div>
          <div className="col-4">
            <select
              value={Month}
              onChange={handleChangeMonth}
              className="form-control"
            >
              <option value="">selectionner mois</option>
              <option value="01">janvier</option>
              <option value="02">fevrier</option>
              <option value="03">Mars</option>
              <option value="04">Avril</option>
              <option value="05">Mai</option>
              <option value="06">juin</option>
              <option value="07">juiller</option>
              <option value="08">Aout</option>
              <option value="09">september</option>
              <option value="10">october</option>
              <option value="11">november</option>
              <option value="12">decembre</option>
            </select>
          </div>
          <div className="col-4">
            <select
              value={Week}
              onChange={handleChangeWeek}
              className="form-control"
            >
              <option value="">selectionner semaine</option>
              <option value="01">semaine 1</option>
              <option value="02">semaine 2</option>
              <option value="03">semaine 3</option>
              <option value="04">semaine 4</option>
            </select>
          </div>
        </div>
      </div>
      <div
        className="card d-flex justify-content-center align-items-center"
        style={{ padding: "30px" }}
      >
        <Line data={chartData} />
      </div>
    </>
  );
};

export default LineChart;
