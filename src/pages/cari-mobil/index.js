import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./style.scss";
import { queryData, currencyFormat } from "../../helper";
import { ThreeDots } from "react-loader-spinner";
import Filter from "../../components/filter";
import HeroSection from "../../components/hero-section";

const Cari_Mobil = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [emptyData, setEmptyData] = useState(false);

  const baseUrl = "https://bootcamp-rent-cars.herokuapp.com";

  // const getCars = () => {
  //   Axios.get(`${baseUrl}/cars`)
  //     .then((response) => {
  //       const descending = response.data.sort((a, b) => b.id - a.id);
  //       setCars(descending);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const fetch = useRef(true);

  // React.useEffect(() => {
  //   if (fetch.current) {
  //     getCars();
  //     fetch.current = false;
  //   }
  // }, []);

  // const submitData = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     name: inputSamplePost.current.value,
  //     category: 6,
  //     price: 7290,
  //     status: true,
  //     start_rent_at: '2040-07-03T03:00:07.069Z',
  //     finish_rent_at: '2002-02-26T07:56:36.623Z',
  //     image: 'http://loremflickr.com/640/480?random=2',
  //     createdAt: '2097-04-15T17:34:57.248Z',
  //     updatedAt: '2019-10-28T13:24:33.132Z',
  //     description: 'odio.',
  //   };

  //   Axios.post(`${baseUrl}/cars`, formData)
  //     .then((response) => {
  //       if (response) {
  //         getCars();
  //         inputSamplePost.current.value = null;
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const submitEditData = () => {
  //   const formData = {
  //     name: 'Mazda 3',
  //     category: 6,
  //     price: 7290,
  //     status: false,
  //     start_rent_at: '2040-07-03T03:00:07.069Z',
  //     finish_rent_at: '2002-02-26T07:56:36.623Z',
  //     image: 'http://loremflickr.com/640/480?random=1',
  //     createdAt: '2097-04-15T17:34:57.248Z',
  //     updatedAt: '2019-10-28T13:24:33.132Z',
  //     description: 'odio.',
  //   };

  //   Axios.put(`${baseUrl}/cars/${inputSampleEdit.current.value}`, formData)
  //     .then((response) => {
  //       if (response) {
  //         getCars();
  //         inputSampleEdit.current.value = null;
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const submitDeleteData = () => {
  //   Axios.delete(`${baseUrl}/cars/${inputSampleDelete.current.value}`)
  //     .then((response) => {
  //       if (response) {
  //         getCars();
  //         inputSampleDelete.current.value = null;
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const inputSamplePost = useRef();
  // const inputSampleEdit = useRef();
  // const inputSampleDelete = useRef();

  const namaMobil = useRef('');
  const category = useRef('');
  const harga = useRef('');
  const statusOrder = useRef('');
  // const price = () => {
  //   if(harga.current.value < 400000){
  //     return{
  //       minPrice: 0,
  //       maxPrice: 400000
  //     }
  //   }else if(harga.current.value > 400000 && harga.current.value < 600000 ){
  //     return{
  //       minPrice: 400000,
  //       maxPrice: 600000
  //     }
  //   }else {
  //     return{
  //       maxPrice: 600000
  //     }
  //   }
  // }

  const getData = (e) => {
    e.preventDefault();
    const params = {
      name: namaMobil.current.value,
      category: category.current.value,
      price: harga.current.value,
      isRented: statusOrder.current.value,
    };
    // const descending = (data) => {
    //   return data.sort((a, b) => b.id - a.id);
    // };
    setLoading(true);
    setEmptyData(false);
    setCars([]);

    // Axios.get(`${baseUrl}/cars?name=${namaMobil.current.value}&category=${category.current.value}&price=${harga.current.value}&status=${statusOrder.current.value}
    Axios.get(`${baseUrl}/customer/v2/car?${queryData(params)}`)
      .then((response) => {
        console.log(response);
        setCars(response.data.cars)
        setLoading(false)
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

  const filterData = {
    getData,
    namaMobil,
    category,
    harga,
    statusOrder,
  };

  return (
    <div>
      <HeroSection />
      <Filter {...filterData} />
      <div className="cari-mobil">
        <div className="container">
            {loading ? (
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              <div className="row">
                {cars.map((car, index) => {
                  return (
                    <div className="col-lg-4" key={index}>
                      <div className="card">
                        <div className="card-thumbnail">
                          <img src={car.image} alt="" />
                        </div>
                        <div className="card-desctiption">
                          <h3 className="name">{car.name}</h3>
                          <p className="price">
                            Rp {currencyFormat(car.price)} / hari
                          </p>
                          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut est inventore natus fugiat tenetur corrupti a libero eligendi deserunt nihil excepturi, necessitatibus iure labore rerum molestias. Nam, unde optio!</p>
                        </div>
                        <Link
                          className="btn btn-success d-block"
                          to={`/cari-mobil/${car.id}`}
                        >
                          Pilih Mobil
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {emptyData && <>Data Tidak Ditemukan</>}
          </div>
          {/* <form className="form d-flex flex-column" onSubmit={submitData}>
              <label htmlFor="" style={{ marginBottom: 10 }}>
                Post Data Object (add new object with dynamic name)
              </label>
              <div className="d-inline-flex">
                <input type="text" className="px-2" ref={inputSamplePost} />
                <input type="text" value={inputSample} onChange={(e) => setInputSample(e.target.value)}/> 
                <button
                  style={{ marginLeft: 10 }}
                  className="btn btn-success"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <br />
            <br />
            <div className="form d-flex flex-column">
              <label htmlFor="" style={{ marginBottom: 10 }}>
                Edit Data Object Base on ID
              </label>
              <div className="d-inline-flex">
                <input type="number" className="px-2" ref={inputSampleEdit} />
                <button
                  style={{ marginLeft: 10 }}
                  className="btn btn-success"
                  type="button"
                  onClick={submitEditData}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="form d-flex flex-column">
              <label htmlFor="" style={{ marginBottom: 10 }}>
                Delete Data Object Base on ID
              </label>
              <div className="d-inline-flex">
                <input type="number" className="px-2" ref={inputSampleDelete} />
                <button
                  style={{ marginLeft: 10 }}
                  className="btn btn-success"
                  type="button"
                  onClick={submitDeleteData}
                >
                  Submit
                </button>
              </div>
            </div> */}
        </div>
      </div>
  );
};

export default Cari_Mobil;
