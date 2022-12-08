import React from "react";
import successIcon from "./success.svg";
import download from "./fi_download.svg";
// PDF
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { getFilePlugin, RenderDownloadProps } from "@react-pdf-viewer/get-file";
import Portofolio from "./test.pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";

import "./style.scss";

const E_Tiket = (props) => {
  // PDF Viewer
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;
  return (
    <div className="e_tiket">
      <div className="container">
        <div className="row">
          <div className="col-12 status">
            <img src={successIcon} alt="" />
            <h2>Pembayaran Berhasil!</h2>
            <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
          </div>
        </div>
        <div className="row invoice-detail">
          <div className="col-12">
            <div className="card">
              <div className="row">
                <div className="col-8">
                  <h2>Invoice</h2>
                </div>
                <div className="col-4">
                  {/* <Download>
                    {(RenderDownloadProps) => (
                      <button className="button" onClick={props.onClick}>
                        <img src={download} alt="" />
                        Unduh
                      </button>
                    )}
                  </Download> */}
                </div>
              </div>
              <p>no. inovice</p>
              <div className="row invoice-view">
                <div className="col-12">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
                  <div
                    style={{
                      height: "500px"
                    }}
                  >
                    <Viewer
                      fileUrl={Portofolio}
                      plugins={[getFilePluginInstance]}
                    />
                  </div>
                </Worker>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default E_Tiket;
