import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getUfxProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getUfxProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.ufxProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getUfxProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.ufxProfile[TESTNET_CHAIN_ID]);
  });
});
