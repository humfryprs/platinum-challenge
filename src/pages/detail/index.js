import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import "./style.scss";
import "../../assets/css/bootstrap.css";
import Accordion from "../../../node_modules/react-bootstrap/Accordion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { createRoot } from "react-dom/client";
// import {queryData} from "../../helper";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  //Calendar
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();

  // const [value, onChange] = useState(new Date());
  let { productId } = useParams();

  const baseUrl = "https://bootcamp-rent-cars.herokuapp.com";

  const fetch = useRef(true);

  const getDetail = (productId) => {
    Axios.get(`${baseUrl}/customer/car/${productId}`)
      .then((response) => {
        console.log(response.data);
        setDetail(response.data);
      })
      .catch((error) =>
        // handle error
        console.log(error)
      );
  };

  //date converter
  function convert(str) {
    var date = new Date(str),
      month = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), month, day].join("-");
  }

  const saveDate = async (e) => {
    // console.log("ok");

    //axios

    e.preventDefault();
    const params = {
      //content here
      start_rent_at: convert(startDate),
      finish_rent_at: convert(endDate),
      car_id: parseInt(productId),
    };

    const headers = {
      "Content-Type": "application/json",
      access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1c3RvbWVyQGJjci5pbyIsInJvbGUiOiJDdXN0b21lciIsImlhdCI6MTY3MDc0NzM5MH0._6opOlcCEw-NZsVPkclAA1-NqdV_bEEncLMekVdXasw",
    };

    await Axios.post(`https://bootcamp-rent-cars.herokuapp.com/customer/order`, params, {
      headers: headers,
    })
      .then(function () {
        // Handle success
        navigate("/payment");
      })
      .catch(function (error) {
        // Handle error
        console.log(error);
      });

    // const config = {
    //   auth: {
    //     type: "apikey",
    //     apikey: [
    //       {
    //         key: "value",
    //         value:
    //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1c3RvbWVyQGJjci5pbyIsInJvbGUiOiJDdXN0b21lciIsImlhdCI6MTY3MDc0NzM5MH0._6opOlcCEw-NZsVPkclAA1-NqdV_bEEncLMekVdXasw",
    //         type: "string",
    //       },
    //       {
    //         key: "key",
    //         value: "access_token",
    //         type: "string",
    //       },
    //       {
    //         key: "in",
    //         value: "header",
    //         type: "string",
    //       },
    //     ],
    //   },
    //   method: "POST",
    //   url: "https://bootcamp-rent-cars.herokuapp.com/customer/order",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: JSON.stringify({
    //     start_rent_at: convert(startDate.current.value),
    //     finish_rent_at: convert(endDate.current.value),
    //     car_id: productId.current.value,
    //   }),
    // };

    // console.log(config.data);

    // Axios(config)
    // .then(function (response) {
    //     // Handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // Handle error
    //     console.log(error);
    //   });

    //fetch

    // fetch(`${baseUrl}/customer/order`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json;charset=UTF-8",
    //     access_token:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3MDY1NDQ2Mn0.9egUeHoAazkcjf5AZiQ01HIh74KK0hCk7ywItOWjC-Q",
    //   },
    //   body: JSON.stringify({
    //     start_rent_at: convert(startDate.current.value),
    //     finish_rent_at: convert(endDate.current.value),
    //     CarId: productId.current.value,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  useEffect(() => {
    if (fetch.current) {
      fetch.current = false;
      getDetail(productId);
    }
  }, [productId]);

  return (
    <div className="detail">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Tentang Paket</h2>
            <h2>Include</h2>
            <ul>
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam </li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <h2>Include</h2>
            <ul>
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam </li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Refund, Reschedule, Overtime</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam </li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-5">
            <div className="image">
              <img src={detail.image} alt="" />
            </div>
            <h1>{detail.name}</h1>
            <form action="" onSubmit={saveDate}>
              <div className="datepicker">
                <DatePicker
                  selectsRange={true}
                  placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  isClearable={true}
                  className="datepicker"
                />
              </div>
              <div className="total">
                <p>Total</p>
                <p>{detail.price}</p>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
