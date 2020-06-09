import Peer from "./peer";

/**
 * describe is jest specific function
 * name of the object as string for which the test is written
 * function that will define a series of tests
 */
describe("Peer", () => {
  let data, peer;
  /**
   * beforeEach allows us to run some code before
   * running any test
   * example creating an instance
   */
  beforeEach(() => {
    data = "bar";
    peer = new Peer("Tín");
  });
  /**
   * it function is used to write unit tests
   * first param is a description
   * second param is callback arrow function
   */
  it("Create peer success", () => {
    /**
     * expect is similar to assert
     * it expects something
     */
    expect(peer.name).toEqual("Tín");
  });

  it("Add connector", () => {
    peer.addConnector(new Peer("Connector1"));
    expect(peer.getConnector(0)).toEqual(new Peer("Connector1"));
  });

  it("Delete connector", () => {
    peer.deleteConnector(0);
    expect(peer.listConnector[0]).not.toEqual(new Peer("Connector1"));
  });
});
