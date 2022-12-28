import React, { useState } from "react";
// import CMS_Sidebar from "../../components/cms-sidebar";
import { Bar } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";
import "./style.scss";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const [days, setDays] = useState([]);
  const [data, setData] = useState({});
  // state = {
  //   data: {},
  // };

  function convert(str) {
    var date = new Date(str),
      month = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), month, day].join("-");
  }

  const startMonth = convert(startDate);
  let endMonth = convert(startDate);
  let endDateOfMonth = "30";
  endMonth = endMonth.substring(0, endMonth.length - 2) + endDateOfMonth;
  console.log(endMonth);

  const getData = (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      Authorization: "access_token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3MTU4NzkyMX0.ISh7PDXJrm2QW1l_OJWkl4NC1p0XKhoPMHSn-kMhEMQ",
    };

    const params = {
      from: startMonth,
      until: endMonth,
    };

    Axios.get(`https://bootcamp-rent-cars.herokuapp.com/admin/order/reports`, params, {
      headers: headers,
    })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) =>
        // handle error
        console.log(error)
      );
  };

  const values = Object.values(data);
  const day = values.map((item) => item.day);
  const totalCarRented = values.map((item) => item.orderCount);
  // console.log(days.day)
  const labels = day;

  const dataChart = {
    labels,
    datasets: [
      {
        label: "My first dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: totalCarRented,
      },
    ],
  };

  return (
    <div>
      {/* <CMS_Sidebar /> */}
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="MM/yyyy" showMonthYearPicker showFullMonthYearPicker />
            <form onSubmit={getData}>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
            <Bar data={dataChart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
