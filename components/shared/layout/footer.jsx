export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <h6>About</h6>
            <p className="text-justify ">
              KriptoKyng Pool was established in 2020 to provide the community
              of miner a reliable and secure mining site. This pool is designed
              in C++ and provides Ultra-low-latency and multi-threaded Stratums.
              The payments are made to the wallet address that you provide in
              your miner&apos;s user field every 10 minutes.
            </p>
          </div>
          <div className="col-xs-6 col-md-2">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="pool">PoolList</a>
              </li>
              <li>
                <a href="wallet">Wallet Information</a>
              </li>
              <li>
                <a href="cryptonews">CryptoNews</a>
              </li>
              <li>
                <a href="howto">How to mine</a>
              </li>
              <li>
                <a href="api_information">API</a>
              </li>
              <li>
                <a href="privacy_policy/">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-2">
            <h6>Address</h6>
            <p className="address">KriptoKyng LLC</p>
            <p className="address">10675 E. Bay Tree Dr.</p>
            <p className="address">Gulfport, MS. 39503 U.S.A.</p>
            <p className="address">30.4449235,-89.0598622</p>
          </div>
          {/* <div className="col-sm-6 col-md-2">
              <Image
                src="images/footer-logo.png"
                alt="KriptoKyng Pool"
                width={125}
                height={125}
                opacity={0.6}
              />
            </div> */}
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2020 All Rights Reserved by
              <a href="#"> KriptoKyng LLC</a>
            </p>
            BTC Donations: bc1qzdrg2zh63484392jzjjt5js0nhkl4ldp5ed6n0
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
