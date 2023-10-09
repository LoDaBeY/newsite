//call the css file to make it more organizing
import "./Footer.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/config";

import Words from "../../Assets/WORDS.jpg";
import Andovar from "../../Assets/andovar.png";
import Trenstec from "../../Assets/TransTec.png";
function Footer() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="container">
      {user && (
        <div className="row" id="services">
          <div className="col-md-4">
            <div className="card m-2 p-3" style={{ width: "20rem" }}>
              <img src={Words} className="card-img-top mx-auto" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">WORDS</h5>
                <p className="card-text">Some quick example text for Card 1.</p>
                <a href="#" className="btn btn-primary">
                  See his refrence
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-2 p-3" style={{ width: "20rem" }}>
              <img src={Andovar} className="card-img-top mx-auto" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Andovar</h5>
                <p className="card-text">Some quick example text for Card 2.</p>
                <a href="#" className="btn btn-primary">
                  See his refrence
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-2 p-3" style={{ width: "20rem" }}>
              <img src={Trenstec} className="card-img-top mx-auto" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">TrensTrec</h5>
                <p className="card-text">Some quick example text for Card 3.</p>
                <a href="#" className="btn btn-primary">
                  See his refrence
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
