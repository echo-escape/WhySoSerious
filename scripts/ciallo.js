document.addEventListener('DOMContentLoaded', () => {
  
  // 获取html元素
  const inputText = document.querySelector(".input-text");
  const outputText = document.querySelector(".output-text");
  const encodeButton = document.querySelector(".encode-button");
  const decodeButton = document.querySelector(".decode-button");

  // ciallo规则
  const ZERO = 'Cia';
  const ONE = 'llo';
  const BIT_SEPRATOR = '~';
  const CHAR_SEPRATOR = '(∠・ω< )⌒☆';

  // encode
  function cialloEncode() {
    const originalText = inputText.value;
    // 确保无空内容
    if (!originalText) {
      alert("Please type some content.");
      return; // 空输入终止操作
    }

    const chars = originalText.split('');
    const enccodedChars = chars.map(char => {
      const charCode = char.codePointAt(0);
      const charCodeString = charCode.toString(2);

      const cialloString = charCodeString.split('').map(bitChar => {
        return bitChar === '1' ? ONE : ZERO;
      }).join(BIT_SEPRATOR);

      return cialloString;
    });

    outputText.value = enccodedChars.join(CHAR_SEPRATOR); // 将数组合并为字符串带有CHAR_SEPRATOR
  }

  function cialloDecode() {
    const originalText = inputText.value;
    if (!originalText) {
      alert("Please type some content.");
      return; // 空输入终止操作
    }

    const cialloStrings = originalText.split(CHAR_SEPRATOR); // 分割出字符串数组
    const decodedChars = cialloStrings.map(cialloString => { // 遍历字符，处理单个字符串
      const cialloBits = cialloString.split(BIT_SEPRATOR); // 变为字符数组,一个字符数组表示一个字符，也表示空格
      const binaryBits = cialloBits.map(cialloBit => {
       return cialloBit === ZERO ? 0 : 1;
      }).join(''); // 将数组合并为字符串
      const charCode = parseInt(binaryBits, 2); // 将字符串转化为十进制数字
      const char = String.fromCodePoint(charCode);
      return char;
    }); // 这里得到的是数组

    outputText.value = decodedChars.join(''); // 将数组合并为字符串
  }

  // 按钮监听
  encodeButton.addEventListener('click', cialloEncode);
  decodeButton.addEventListener('click', cialloDecode);
});