import Button from "react-bootstrap/Button";
import { FaChevronDown } from "react-icons/fa";

export function Hero() {
  return (
    <section className="bgimage">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="w-100 h-100">
              <div className="d-flex flex-row-reverse miner-fee">
                Mining fee 0.8%
              </div>
              <h1>
                KriptoKyng <p>Pool</p>
              </h1>
              <sub-title>
                Reliable, Trustworthy and Secure Pool established in 2020.
              </sub-title>
              <br />
              <Button variant="outline-primary" size="sm" href="/pool">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FaChevronDown type="down" className="down" />
    </section>
  );
}
