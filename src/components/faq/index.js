import React from "react";
import Accordion from "../accordion";

import "./style.css";

const FAQ = () => {
  // const [active, setActive] = useState(false);
  // const [count, setCount] = useState(0);  

  // useEffect(() => {
  //   if (count % 2 == 0) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // });
  
  return (
    <div className="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 title">
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="col-lg-7">
            <Accordion/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
