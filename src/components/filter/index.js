import React from "react";
import './style.scss'
// import Button from '../button'

const Filter = (filterData) => {
	// const [data, setData] = useState('');
  
  // const buttonValue = () => {
  //   setData("Search");
  // }
  return (
    <div className="filter">
      <div className="container">
        <div className="row">
          <div className="col">
            <form className="form" onSubmit={filterData.getData}>
              <div className="d-flex mb-4 input-group">
                <label
                  className="mr-2 d-block input-name"
                  htmlFor=""
                  style={{ marginBottom: 10 }}
                >
                  Nama Mobil
                </label>
                <input
                  type="text"
                  className="input-field"
                  ref={filterData.namaMobil}
                />
              </div>
              <div className="d-flex mb-4 input-group">
                <label
                  className="mr-2 input-name"
                  htmlFor=""
                  style={{ marginBottom: 10 }}
                >
                  Kategory
                </label>
                <select
                  ref={filterData.category}
                  className="input-field input-option"
                >
                  <option />
                  <option value="Small">2 - 4 orang</option>
                  <option value="Medium">4 - 6 orang</option>
                  <option value="Large">6 - 8 orang</option>
                </select>
              </div>

              <div className="d-flex mb-4 input-group">
                <label
                  className="mr-2 input-name"
                  htmlFor=""
                  style={{ marginBottom: 10 }}
                >
                  Harga
                </label>
                <select
                  ref={filterData.harga}
                  className="input-field input-option"
                >
                  <option />
                  <option value="small">{"< Rp. 400.000"}</option>
                  <option value="medium">Rp. 400.000 - Rp. 600.000</option>
                  <option value="large">{"> Rp. 600.000"}</option>
                </select>
              </div>

              <div className="d-flex mb-4 input-group">
                <label
                  className="mr-2 input-name"
                  htmlFor=""
                  style={{ marginBottom: 10 }}
                >
                  Status
                </label>
                <select
                  ref={filterData.statusOrder}
                  className="input-field input-option"
                >
                  <option />
                  <option value="true">Tersedia</option>
                  <option value="false">Disewa</option>
                </select>
              </div>

              <button href="http://" className="btn btn-success button">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
