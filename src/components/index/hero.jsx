import Button from "react-bootstrap/Button";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "../../src/context/TranslationContext";
export function Hero() {
  const { maintitle, subtitle, miningFee, getStarted } = useTranslation();
  return (
    <section className="bgimage">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="w-100 h-100">
              <div className="d-flex flex-row-reverse miner-fee">
                7.8%
              </div>
              <h1>{maintitle}</h1>
              <sub-title>{subtitle}</sub-title>
              <br />
              <Button variant="outline-primary" size="sm" href="/pool">
                {getStarted}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FaChevronDown type="down" className="down" />
    </section>
  );
}
