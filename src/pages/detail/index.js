import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import "./style.scss";
import "../../assets/css/bootstrap.css";
import Accordion from "../../../node_modules/react-bootstrap/Accordion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { createRoot } from "react-dom/client";
import {queryData} from "../../helper";

const Detail = () => {
  //Calendar
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [emptyData, setEmptyData] = useState(false);
  const [detail, setDetail] = useState({});
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

  
  const pushData = (e) => {
    e.preventDefault();
    const params = {
      startRentAt: startDate.current.value,
      finishRentAt: endDate.current.value,
    };
    setEmptyData(false)
    Axios.post(`${baseUrl}/customer/order?`, )
      .then((response) => {
        if (response.data.cars.length != null) {
          setDateRange(response.data.startDate);
          setDateRange(response.data.endDate);
          console.log(response.data.startDate);
        } else {
          setEmptyData(true);
        }
        // if (response) {
        //   setTimeout(() => {
        //     if (response.data.length > 0) {
        //       const descending = response.data.sort((a, b) => b.id - a.id);
        //       setCars(descending);
        //     } else {
        //       setEmptyData(true);
        //     }
        //     setLoading(false);
        //   }, 2000);
        // }
      })
      .catch((error) => console.log(error));
  };

  // console.log(carCategory);

  useEffect(() => {
    if (fetch.current) {
      fetch.current = false;
      getDetail(productId);
    }
  }, [productId]);

  //Put Function

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
            <button className="btn btn-success" onClick={pushData}>
              Lanjutkan Pembayaran
            </button>
            {emptyData && <>Data Tidak Ditemukan</>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
