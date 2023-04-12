const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(flag = true) {
    this.type = flag;
  }

  cipherAlgo(first, second) {
    return ((first % second) + second) % second;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    let encryptedMessage = [];

    for (let i = 0, j = 0; i < message.length; i++) {
      let operation = message[i].charCodeAt();
      if (operation > 64 && operation < 91) {
        operation =
          this.cipherAlgo(
            operation -
              65 +
              (key[j % key.length].toUpperCase().charCodeAt() - 65),
            26
          ) + 65;
        j++;
      }
      encryptedMessage.push(String.fromCharCode(operation));
    }

    if (!this.type) encryptedMessage.reverse();

    return encryptedMessage.join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");
    encryptedMessage = encryptedMessage.toUpperCase();
    let decryptedMessage = [];

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      let operation = encryptedMessage[i].charCodeAt();
      if (operation > 64 && operation < 91) {
        operation =
          this.cipherAlgo(
            operation -
              65 -
              (key[j % key.length].toUpperCase().charCodeAt() - 65),
            26
          ) + 65;
        j++;
      }
      decryptedMessage.push(String.fromCharCode(operation));
    }

    if (!this.type) decryptedMessage.reverse();

    return decryptedMessage.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
