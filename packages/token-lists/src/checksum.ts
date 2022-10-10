import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import unitedfarmersDefault from "./tokens/unitedfarmers-default.json";
import unitedfarmersExtended from "./tokens/unitedfarmers-extended.json";
import unitedfarmersTop100 from "./tokens/unitedfarmers-top-100.json";
import unitedfarmersTop15 from "./tokens/unitedfarmers-top-15.json";
import coingecko from "./tokens/coingecko.json";
import cmc from "./tokens/cmc.json";
import unitedfarmersMini from "./tokens/unitedfarmers-mini.json";
import unitedfarmersMiniExtended from "./tokens/unitedfarmers-mini-extended.json";

const lists = {
  "unitedfarmers-default": unitedfarmersDefault,
  "unitedfarmers-extended": unitedfarmersExtended,
  "unitedfarmers-top-100": unitedfarmersTop100,
  "unitedfarmers-top-15": unitedfarmersTop15,
  coingecko,
  cmc,
  "unitedfarmers-mini": unitedfarmersMini,
  "unitedfarmers-mini-extended": unitedfarmersMiniExtended,
};

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0;
  const listToChecksum = lists[listName];
  const updatedList = listToChecksum.reduce((tokenList, token) => {
    const checksummedAddress = getAddress(token.address);
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1;
      const updatedToken = { ...token, address: checksummedAddress };
      return [...tokenList, updatedToken];
    }
    return [...tokenList, token];
  }, []);

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`);
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Checksumming done!");
  } else {
    console.info("All addresses are already checksummed");
  }
};

export default checksumAddresses;
