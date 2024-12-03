export default function ApiInformation() {
  return (
    <div className="container">
      <h1 className="p-3">API</h1>
      <div className="glassfilter mx-auto p-3 mb-5">
        <ul>
          <li>
            <b>/api/pools</b>
          </li>
          <p>
            Returns configuration data and current stats for all configured
            pools.
          </p>
          <li>
            <b>/api/pools/pool-id/blocks</b>
          </li>
          <p>
            Returns information about blocks mined by the pool. Results can be
            paged by using the page and pageSize query parameters. Note:
            transactionConfirmationData is usually the blockchain transaction
            id. http://localhost:4000/api/pools/xmr1/blocks?page=2&pageSize=3
          </p>
          <li>
            <b>/api/pools/pool-id/payments</b>
          </li>
          <p>
            Returns information about payments issued by the pool. Results can
            be paged by using the page and pageSize query parameters. Note:
            transactionConfirmationData is usually the blockchain transaction
            id. http://localhost:4000/api/pools/xmr1/payments?page=2&pageSize=3
          </p>
          <li>
            <b>/api/pools/pool-id/miners</b>
          </li>
          <p>
            Returns a pool&apos;s top miners by hashrate for the last 24 hours.
          </p>
          <li>
            <b>/api/pools/pool-id/performance</b>
          </li>
          <p>Returns pool performance stats for the last 24 hours.</p>
          <li>
            <b>/api/pools/pool-id/miners/miner-wallet-address</b>
          </li>
          <p>
            Provides current stats about a miner on a specific pool.
            performance.workers is a dictionary where key is a worker name or an
            empty string for the default worker, and value is an object
            containing performance metrics for that worker. To compute the
            combined performance for a miner you need to accumulate the values
            of all workers in the dictionary.
          </p>
          <li>
            <b>/api/pools/pool-id/miners/miner-wallet-address/payments</b>
          </li>
          <p>
            Returns information about payments issued by the pool to specified
            miner. Results can be paged by using the page and pageSize query
            parameters. Note: transactionConfirmationData is usually the
            blockchain transaction id.
          </p>
          <li>
            <b>/api/pools/pool-id/miners/miner-wallet-address/performance</b>
          </li>
          <p>
            Returns miner performance stats for the last 24 hours. The
            information is broken down into a dictionary entry for each worker.
          </p>
        </ul>
      </div>
    </div>
  );
}
