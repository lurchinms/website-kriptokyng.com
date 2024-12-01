import { mainAPIConfig } from "../../../config/api/main";
export const getBlocks = async () => {
    try {
      const req = await fetch(`${mainAPIConfig.ROOT_URL}/blocks`);
      const data= await req.json();
      console.log("data",data)
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
