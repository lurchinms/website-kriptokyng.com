export default function HowTo() {
  return (
    <div className="container">
      <h1 className="p-3">How To Mine</h1>
      <div className="glassfilter mx-auto p-3 mb-5">
        <p>
          <b>1.</b> First to learn how to mine, you should under the process of
          the blockchain. Here is a informative video to help explain how a
          blockchain works.
        </p>
        <div className="mt-3 px-3 px-sm-0">
          <iframe
            className="responsive-iframe"
            src={`https://www.youtube.com/embed/SSo_EIwHSd4`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <br />
        <p>
          <b>2.</b> Crypto mining involves validating cryptocurrency
          transactions on a blockchain network and adding them to a distributed
          ledger. Most importantly, crypto mining prevents the double-spending
          of digital currency on a distributed network. Like physical
          currencies, when one member spends cryptocurrency, the digital ledger
          must be updatedby debiting one account and crediting the other. Here
          is a informative video to help explain how a blockchain mining works.
        </p>
        <div className="mt-3 px-3 px-sm-0">
          <iframe
            className="responsive-iframe"
            src={`https://www.youtube.com/embed/2VtH-XAOjXw`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </div>
  );
}
