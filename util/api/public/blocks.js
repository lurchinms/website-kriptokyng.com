import { mainAPIConfig } from "../../../config/api/main";

let previousBlocks = [];

export const getBlocks = async (showNotification) => {
  const req = await fetch(`${mainAPIConfig.ROOT_URL}/blocks`);
  const blocks = await req.json();

  if (previousBlocks.length && showNotification) {
    const newBlocks = blocks.filter(
      (block) => !previousBlocks.some((prev) => prev.id === block.id)
    );

    newBlocks.forEach((block) =>
      showNotification(`New Block Found: ${block.title}`)
    );
  }

  previousBlocks = blocks; // Update the stored blocks
  return blocks;
};
