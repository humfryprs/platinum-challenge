import React, { useState} from "react";
import successIcon from "./success.svg";
import Axios from "axios";
import Nav_Step from "../../components/nav-step";
import { queryData} from "../../helper";
// import download from "./fi_download.svg";

// PDF

// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import { getFilePlugin, RenderDownloadProps } from "@react-pdf-viewer/get-file";
// import Portofolio from "./test.pdf";
// import "@react-pdf-viewer/core/lib/styles/index.css";

import {
  Document,
  Page,
  View,
  Text,
  Link,
  Font,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

import "./style.scss";

const E_Tiket = () => {
  // PDF Viewer
  // const getFilePluginInstance = getFilePlugin();
  //   const { Download } = getFilePluginInstance;

  const styles = StyleSheet.create({
    title: {
      margin: 20,
      fontSize: 25,
      textAlign: "center",
      backgroundColor: "#e4e4e4",
      textTransform: "uppercase",
      fontFamily: "Oswald",
    },
    body: {
      flexGrow: 1,
    },
    row: {
      flexGrow: 1,
      flexDirection: "row",
    },
    block: {
      flexGrow: 1,
    },
    text: {
      width: "60%",
      margin: 10,
      fontFamily: "Oswald",
      textAlign: "justify",
    },
    fill1: {
      width: "40%",
      backgroundColor: "#e14427",
    },
    fill2: {
      flexGrow: 2,
      backgroundColor: "#e6672d",
    },
    fill3: {
      flexGrow: 2,
      backgroundColor: "#e78632",
    },
    fill4: {
      flexGrow: 2,
      backgroundColor: "#e29e37",
    },
  });

  Font.register({
    family: "Oswald",
    src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
  });

  const [detail, setDetail] = useState({});

  const baseUrl = "https://bootcamp-rent-cars.herokuapp.com";

  // const orderId = useRef("");

  const orderId = 3;

    const params = {
      id: orderId
    };

    const headers = {
      "Content-Type": "application/json",
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1c3RvbWVyQGJjci5pbyIsInJvbGUiOiJDdXN0b21lciIsImlhdCI6MTY3MDc0NzM5MH0._6opOlcCEw-NZsVPkclAA1-NqdV_bEEncLMekVdXasw",
    };

    Axios.get(`${baseUrl}/customer/order/${queryData(params)}`, {
      headers: headers,
    })
      .then((response) => {
        setDetail(response.data);
        console.log(response.data);
      })
      .catch((error) =>
        // handle error
        console.log(error)
      );
  

  // useEffect(() => {
  //   if (fetch.current) {
  //     fetch.current = false;
  //     getSlip(orderId);
  //   }
  // }, [orderId]);

  const dataNavTop ={
    orderId
  };

  return (
    <div className="e_tiket">
      <Nav_Step {...dataNavTop}/>
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
              <p>{detail.id}</p>
              <div className="row invoice-view">
                <div className="col-12">
                  {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
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
                </Worker> */}
                  <PDFViewer
                    style={{ flex: 1, width: "100%", height: "100vh" }}
                  >
                    <Document>
                      <Page size="A4">
                        <Link
                          style={styles.title}
                          src="https://es.wikipedia.org/wiki/Lorem_ipsum"
                        >
                          Lorem Ipsum
                        </Link>
                        <View style={styles.body}>
                          <View style={styles.row}>
                            <Text style={styles.text}>
                              {detail.slip}
                            </Text>
                            <View style={styles.fill1} />
                          </View>
                        </View>
                      </Page>
                    </Document>
                  </PDFViewer>
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
