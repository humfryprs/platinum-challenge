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

import React from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./pages/homepage";
import Cari_Mobil from "./pages/cari-mobil";
import Detail from "./pages/detail";

import Footer from "./components/footer";
import Etiket from "./pages/Etiket";

import Pembayaran from "./pages/melakukanpembayaran";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Payment2 from "./pages/melakukanpembayaran2";

import Dashboard from "./pages/dashboard";

import CMSsignin from "./pages/cms-signin";
import E_Tiket from "./pages/Etiket";

const WithAuth = () => {
  const isAuth = window.localStorage.getItem("access_token");
  return (
    <>
      {!isAuth && <Navigate to={"/sign-up"} />}
      <Outlet />
    </>
  );
};

const App = () => {
  const location = useLocation();
  return (
    <div className="App">

      {location.pathname !== "/sign-in" &&
        location.pathname !== "/sign-up" &&
        location.pathname !== "/dashboard" && <Header />}

      <Routes>
        {/* {/ Public /} */}
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cms-signin" element={<CMSsignin />} />

        {/* {/ WithAuth /} */}
        <Route element={<WithAuth />}>
          <Route path="/cari-mobil" element={<Cari_Mobil />} />
          <Route path="/cari-mobil/:productId" element={<Detail />} />
          <Route path="/e-tiket" element={<Etiket />} />
          <Route path="/payment" element={<Pembayaran />} />
          <Route path="/bank-payment" element={<Payment2 />} />
          <Route path="/e-ticket" element={<E_Tiket />} />
        </Route>
      </Routes>


      {location.pathname !== "/sign-in" &&
        location.pathname !== "/sign-up" &&
        location.pathname !== "/dashboard" &&
        location.pathname !== "/dashboard" && (<Footer />)}
    </div>
  );
};

export default App;
