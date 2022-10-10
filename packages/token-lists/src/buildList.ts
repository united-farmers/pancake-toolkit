import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as unitedfarmersDefaultVersion } from "../lists/unitedfarmers-default.json";
import { version as unitedfarmersExtendedVersion } from "../lists/unitedfarmers-extended.json";
import { version as unitedfarmersTop15Version } from "../lists/unitedfarmers-top-15.json";
import { version as unitedfarmersTop100Version } from "../lists/unitedfarmers-top-100.json";
import { version as coingeckoVersion } from "../lists/coingecko.json";
import { version as cmcVersion } from "../lists/cmc.json";
import { version as unitedfarmersMiniVersion } from "../lists/unitedfarmers-mini.json";
import { version as unitedfarmersMiniExtendedVersion } from "../lists/unitedfarmers-mini-extended.json";
import unitedfarmersDefault from "./tokens/unitedfarmers-default.json";
import unitedfarmersExtended from "./tokens/unitedfarmers-extended.json";
import unitedfarmersTop100 from "./tokens/unitedfarmers-top-100.json";
import unitedfarmersTop15 from "./tokens/unitedfarmers-top-15.json";
import coingecko from "./tokens/coingecko.json";
import cmc from "./tokens/cmc.json";
import unitedfarmersMini from "./tokens/unitedfarmers-mini.json";
import unitedfarmersMiniExtended from "./tokens/unitedfarmers-mini-extended.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "unitedfarmers-default": {
    list: unitedfarmersDefault,
    name: "United Farmers Default",
    keywords: ["unitedfarmers", "default"],
    logoURI: "https://unitedfarmers.finance/logo.png",
    sort: false,
    currentVersion: unitedfarmersDefaultVersion,
  },
  "unitedfarmers-extended": {
    list: unitedfarmersExtended,
    name: "United Farmers Extended",
    keywords: ["unitedfarmers", "extended"],
    logoURI: "https://unitedfarmers.finance/logo.png",
    sort: true,
    currentVersion: unitedfarmersExtendedVersion,
  },
  "unitedfarmers-top-100": {
    list: unitedfarmersTop100,
    name: "United Farmers Top 100",
    keywords: ["unitedfarmers", "top 100"],
    logoURI: "https://unitedfarmers.finance/logo.png",
    sort: true,
    currentVersion: unitedfarmersTop100Version,
  },
  "unitedfarmers-top-15": {
    list: unitedfarmersTop15,
    name: "United Farmers Top 15",
    keywords: ["unitedfarmers", "top 15"],
    logoURI: "https://unitedfarmers.finance/logo.png",
    sort: true,
    currentVersion: unitedfarmersTop15Version,
  },
  coingecko: {
    list: coingecko,
    name: "CoinGecko",
    keywords: ["defi"],
    logoURI:
      "https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png",
    sort: true,
    currentVersion: coingeckoVersion,
  },
  cmc: {
    list: cmc,
    name: "CoinMarketCap",
    keywords: ["defi"],
    logoURI: "https://ipfs.io/ipfs/QmQAGtNJ2rSGpnP6dh6PPKNSmZL8RTZXmgFwgTdy5Nz5mx",
    sort: true,
    currentVersion: cmcVersion,
  },
  "unitedfarmers-mini": {
    list: unitedfarmersMini,
    name: "United Farmers Mini",
    keywords: ["unitedfarmers", "binance", "mini program", "mini"],
    logoURI: "https://unitedfarmers.finance/logo.png",
    sort: true,
    currentVersion: unitedfarmersMiniVersion,
  },
  "unitedfarmers-mini-extended": {
    list: unitedfarmersMiniExtended,
    name: "United Farmers Mini Ext",
    keywords: ["unitedfarmers", "binance", "mini program", "mini", "extended"],
    logoURI: "https://unitedfarmers.finance/logo.png",
    sort: true,
    currentVersion: unitedfarmersMiniExtendedVersion,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // CAKE first in extended list
            if ((t1.symbol === "CAKE") !== (t2.symbol === "CAKE")) {
              return t1.symbol === "CAKE" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
