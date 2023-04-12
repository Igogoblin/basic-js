const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  ourArray: [],
  getLength() {
    return chainMaker.ourArray.length;
  },
  addLink(value) {
    this.ourArray.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.ourArray.length ||
      typeof position !== "number"
    ) {
      this.ourArray = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.ourArray.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.ourArray.reverse();
    return chainMaker;
  },
  finishChain() {
    let finishArr = this.ourArray;
    this.ourArray = [];
    return finishArr.reduce((first, second) => `${first}~~${second}`);
  },
};

module.exports = {
  chainMaker,
};
