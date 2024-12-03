import { mainAPIConfig } from "../../../config/api/main";

export const getWallet = async (walletAddress, pool) => {
  const req = await fetch(
    `${mainAPIConfig.ROOT_URL}/pools/${pool}/miners/${walletAddress}/`
  );
  const data = await req.json();
  return data;
};

export const getWalletPayments = async (walletAddress, pool) => {
  const req = await fetch(
    `${mainAPIConfig.ROOT_URL}/pools/${pool}/miners/${walletAddress}/payments?pageSize=10`
  );
  const data = await req.json();
  return data;
};
