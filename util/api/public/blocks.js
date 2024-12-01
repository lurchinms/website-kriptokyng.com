import { mainAPIConfig } from "../../../config/api/main";

export const getBlocks = async () => {
  const req = await fetch(`${mainAPIConfig.ROOT_URL}/api/blocks`);
  return req.json();
};


