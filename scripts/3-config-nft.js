import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x5545959c59961aD69c98d9C5d22BbcBA2838aB5b");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Itachi Sharingan",
        description: "This NFT will give you access to ItachiDAO!",
        image: readFileSync("scripts/assets/itachi-shringan.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();