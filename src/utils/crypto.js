// crypto-js 加密
import CryptoJS from "crypto-js";

export default class Crypoto {
    key = CryptoJS.enc.Utf8.parse("123456789asdfghj"); // 十六位十六进制数作为密钥
    iv = CryptoJS.enc.Utf8.parse("asdfghj123456789"); // 十六位十六进制数作为密钥偏移量

    /* 加密 */
    encrypt(word) {
        const srcs = CryptoJS.enc.Utf8.parse(word);
        const encrypted = CryptoJS.AES.encrypt(srcs, this.key, {
            iv: this.iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return encrypted.ciphertext.toString().toUpperCase();
    }

    /* 解密 */
    decrypt(word) {
        const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
        const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        const decrypt = CryptoJS.AES.decrypt(srcs, this.key, {
            iv: this.iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
    }
}