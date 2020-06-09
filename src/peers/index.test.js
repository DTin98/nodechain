import Peers from "./index";
import Peer from "./peer";

/**
 * describe is jest specific function
 * name of the object as string for which the test is written
 * function that will define a series of tests
 */
describe("Peers", () => {
  let data, peers;
  /**
   * beforeEach allows us to run some code before
   * running any test
   * example creating an instance
   */
  beforeEach(() => {
    data = "bar";
    peers = new Peers();
  });
  /**
   * it function is used to write unit tests
   * first param is a description
   * second param is callback arrow function
   */
  it("add 1 peer", () => {
    /**
     * expect is similar to assert
     * it expects something
     */
    peers.addPeer();
    expect(peers.list).toEqual([new Peer()]);
  });
});
