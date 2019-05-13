/*
 * @Author: lxt 计时器函数
 * @Date: 2019-05-09 11:09:19
 * @Last Modified by: wupeiwen javapeiwen2010@gmail.com
 * @Last Modified time: 2019-05-13 11:43:02
 */
export default class Timer {
  // 时间间隔
  interval = 3000
  // 计时器
  timer = null
  /**
   *  Creates an instance of Timer.
   * @param {*} interval 时间间隔
   * @param {*} call 回调函数
   * @memberof Timer
   */
  constructor(interval, fun) {
    if (typeof interval === 'number') {
      this.interval = interval
    }
    if (this.timer) {
      this.destroy()
    }
    this.timer = setInterval(async () => {
      if (typeof fun === 'function') {
        await fun()
      }
    }, this.interval)
  }
  /**
   * clear Timer
   *
   * @memberof Timer
   */
  destroy() {
    clearInterval(this.timer)
  }
}
