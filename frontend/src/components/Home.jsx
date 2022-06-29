import logo from "../images/estacionAquiLogo.svg";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="container-header">
        <img className="logo-image" src={logo} alt="logo" />
        <h1>EstacionAqui - Início</h1>
      </div>
      <div className="description-container">
        <p className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ea
          voluptates iusto, velit ut porro. Libero assumenda consequuntur eaque.
          Velit ipsa incidunt unde, numquam dolorum animi similique laborum
          optio obcaecati ut ipsum voluptate quidem! Omnis voluptate, id quas
          ipsum vitae corrupti architecto non et officia corporis nulla soluta
          voluptates neque earum rerum alias odio quod fugiat distinctio
          accusamus cupiditate minus labore porro sequi! Praesentium consectetur
          velit dignissimos doloremque veritatis sunt? Eius, numquam, esse rem
          consectetur ex temporibus sint accusamus molestias, quis officia minus
          provident ab eaque earum laboriosam sapiente sed. Voluptas, maiores
          repellendus? Harum asperiores iure explicabo amet, ad porro?
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
