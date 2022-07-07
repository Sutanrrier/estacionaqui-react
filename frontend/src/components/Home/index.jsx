import React from "react";

import logo from "../../images/estacionAquiLogo.svg";
import "./styles.css";

function Home() {
  return (
    <div className="container">
      <div className="container-header">
        <img className="logo-image" src={logo} alt="logo" />
        <h1>EstacionAqui - Início</h1>
      </div>
      <div className="description-container">
        <p className="description-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          ducimus voluptates cumque accusamus. Doloribus nobis possimus
          mollitia. Libero temporibus, ipsam iusto voluptatum aspernatur
          asperiores at velit quaerat, porro nobis aliquam obcaecati nihil
          incidunt! Fuga, optio expedita repellat animi iste iusto aliquid
          beatae minus explicabo praesentium, commodi officia corporis aperiam
          distinctio?
        </p>
        <p className="description-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet labore
          iste voluptas, ullam atque facere dolorem voluptatem dolore illo nobis
          similique provident eligendi molestias nemo blanditiis aliquam? Beatae
          ad fugiat quae provident ullam laborum error, laudantium quia, cum
          rerum magni unde. Earum officiis quos reprehenderit aliquam
          voluptatem, perferendis dignissimos nulla!
        </p>
      </div>
    </div>
  );
}

export default Home;
