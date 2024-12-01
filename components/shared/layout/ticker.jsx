export function Ticker() {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script>
      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,litecoin,peercoin,digibyte,deutsche-emark,auroracoin,cpucoin,bitoreum,dogecoin,monero,ravencoin"
        currency="usd"
        background-color="#030307"
        locale="en"
        font-color="#f77902"
      ></coingecko-coin-price-marquee-widget>
    </div>
  );
}

