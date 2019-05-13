/*
 * @Author: lxt 数据格式化
 * @Date: 2019-05-09 13:44:22
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2019-05-13 11:42:53
 */

export default class Utils {
  /**
   * 格式化数字
   * @static
   * @param {*} number 需要格式化的数字
   * @returns
   * @memberof Utils
   */
  static formatNumber(number) {
    const res = { unit: '', num: 0 }
    if (typeof number === 'number') {
      if (number >= 100000) {
        res.num = number / 10000
        res.unit = '万'
      } else if (number >= 1000000000) {
        res.num = number / 10000
        res.unit = '亿'
      } else if (number >= 10000000000000) {
        res.num = number / 1000000000000
        res.unit = '万亿'
      } else if (number < 100000) {
        res.num = number
      }
    }
    res.num = parseInt(res.num)
    return res
  }

  // static callBack2Promise (callback) {
  //   let vue = this
  //   return new Promise(function (resolve, reject) {
  //     if (vue.$refs[formName] === undefined) {
  //       resolve(true)
  //       reject(new Error(formName + '不存在'))
  //     }
  //     vue.$refs[formName].validate((valid) => {
  //       if (valid) {
  //         resolve(valid)
  //       } else {
  //         reject(new Error('验证失败'))
  //       }
  //     })
  //   })
  // }
}
