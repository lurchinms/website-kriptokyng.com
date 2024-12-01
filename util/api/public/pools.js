import { mainAPIConfig } from "../../../config/api/main";

export const getPools = async () => {
  const req = await fetch(`${mainAPIConfig.ROOT_URL}/pools/`);
  const json = await req.json();
  return json.pools;
};

export const getPoolPerformance = async (id) => {
  const req = await fetch(`${mainAPIConfig.ROOT_URL}/pools/${id}/performance`);
  const json = await req.json();
  return json.stats;
};

export const getPoolPayments = async (id) => {
  const req = await fetch(
    `${mainAPIConfig.ROOT_URL}/pools/${id}/payments?page=0&pageSize=50`
  );
  const json = await req.json();
  return json;
};

export const getPoolBlocks = async (id) => {
  const req = await fetch(
    `${mainAPIConfig.ROOT_URL}/pools/${id}/blocks?page=0&pageSize=50`
  );
  const json = await req.json();
  return json;
};

export const getTopMiners = (pools, count = 50) => {
  const miners = [];
  for (let i = 0; i < pools.length; i++) {
    const currentMiners = pools[i].topMiners;
    for (let j = 0; j < currentMiners.length; j++) {
      miners.push({
        id: pools[i].id,
        coin: pools[i].coin.symbol.toLowerCase(),
        poolname: pools[i].coin.name,
        miner: currentMiners[j],
      });
    }
  }
  miners.sort((a, b) => a.hashrate - b.hashrate);
  return miners.slice(0, count);
};
