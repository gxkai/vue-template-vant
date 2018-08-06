export default {
  /**
   * 将手机号中间4位数字替换为星号
   * @param {string} str - 待处理字符串
   * @returns {string} 已处理字符串
   */
  asterisk: function (str) {
    str = String(str);
    return `${str.substr(0, 3)}****${str.substr(-4, 4)}`;
  }
};
