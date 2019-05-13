import Fade from '@/components/Fade'
import Timer from '@/js/Timer'

export default class DatasourceFadeFactory {
  static getDatasourceFade(str, funName) {
    const name = str.toLowerCase()
    return {
      components: {
        Fade
      },
      data() {
        return {
          // 消费端临时变量
          tmp: {},
          // 计时器
          timer: null
        }
      },
      async created() {
        await this.refreshOverview()
        this.timer = new Timer(this.timeInterval[name], this.fadeToggle)
      },
      methods: {
        // 刷新消费端数据源
        fadeToggle() {
          const vue = this
          this.$nextTick(async function() {
            await vue.getOverview()
            this.fadeOut()
            setTimeout(() => {
              vue.refreshOverview()
            }, vue.timeInterval[name] - 5000)
          })
        },
        // 淡入
        async refreshOverview() {
          await this.getOverview()
          this[name] = this.tmp
          this.$nextTick(() => {
            this.fadeIn()
          })
        },
        // 调用接口获取数据设置给tmp
        async getOverview() {
          this.tmp.total = this[name].total
          this.tmp = await this[funName]()
        }
      }
    }
  }
}
