// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/header";
// import Homepage from "./pages/homepage";


// function App() {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/cari-mobil" element={<Cari_Mobil />} />
//         {/* <Route path="/" element={<Hasil_Pencarian />} /> */}
//       </Routes>
      
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './pages/homepage';
import Cari_Mobil from "./pages/cari-mobil";
import Detail from './pages/detail';
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cari-mobil" element={<Cari_Mobil />} />
        <Route path="/cari-mobil/:productId" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
