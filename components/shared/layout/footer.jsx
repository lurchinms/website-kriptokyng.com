import { useTranslation } from "../../../src/context/TranslationContext";

export function Footer() {
  const {
    title,
    description,
    addresstitle,
    addressname,
    addressstreet,
    addresscity,
    addresscoordinates,
    quickLinks,
    donations,
  } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <h6>{title}</h6>
            <p className="text-justify">{description}</p>
          </div>
          <div className="col-xs-6 col-md-2">
            <h6>{quickLinks?.title}</h6>
            <ul className="footer-links">
              <li>
                <a href={quickLinks?.links[0].href}>
                  {quickLinks?.links[0].text}
                </a>
              </li>
              <li>
                <a href={quickLinks?.links[1].href}>
                  {quickLinks?.links[1].text}
                </a>
              </li>
              <li>
                <a href={quickLinks?.links[2].href}>
                  {quickLinks?.links[2].text}
                </a>
              </li>
              <li>
                <a href={quickLinks?.links[3].href}>
                  {quickLinks?.links[3].text}
                </a>
              </li>
              <li>
                <a href={quickLinks?.links[4].href}>
                  {quickLinks?.links[4].text}
                </a>
              </li>
              <li>
                <a href={quickLinks?.links[5].href}>
                  {quickLinks?.links[5].text}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-2">
            <h6>{addresstitle}</h6>
            <p className="address">{addressname}</p>
            <p className="address">{addressstreet}</p>
            <p className="address">{addresscity}</p>
            <p className="address">{addresscoordinates}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              {donations?.text}
              <a href="#">{donations?.organization}</a>
            </p>
            {donations?.wallet}
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/people/Ronald-Lonnborg-Jr/100078654561004/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  className="discord"
                  href="https://discord.gg/USABG88pdZ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-discord"></i>
                </a>
              </li>
              <li>
                <a
                  className="telegram"
                  href="https://t.me/kriptokyng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-telegram"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/ronnie-lonnborg-jr-2b84b87a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  className="github"
                  href="https://github.com/lurchinms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
