import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import './style.scss'
import "../../assets/css/bootstrap.css";
import Accordion from "../../../node_modules/react-bootstrap/Accordion";

const Detail = () => {

  const [detail, setDetail] = useState({});
  let { productId } = useParams();

  const baseUrl = "https://bootcamp-rent-cars.herokuapp.com";

  const fetch = useRef(true);
  
  const getDetail = (productId) => {
    Axios.get(`${baseUrl}/customer/car/${productId}`)
    .then((response) => {
      console.log(response.data)
      setDetail(response.data);
      })
      .catch((error) =>
        // handle error
        console.log(error)
      );
  };
  // console.log(carCategory);

  useEffect(() => {
    if (fetch.current) {
      fetch.current = false;
      getDetail(productId)
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
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam </li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <h2>Include</h2>
            <ul>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam </li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Refund, Reschedule, Overtime
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    </li>
                    <li>Sudah termasuk bensin selama 12 jam </li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-5">
            <div className='image'>
            <img src={detail.image} alt="" />
            </div>
            <h1>{detail.name}</h1>
            <div className="total">
              <p>Total</p>
              <p>{detail.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
