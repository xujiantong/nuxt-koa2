import Http from '@/plugins/axios'

export default class {
  // 获取生产端数据源
  static listProductors() {
    return Http.get('/dataview/listProductors')
  }
  // 获取消费端数据源
  static listConsumers() {
    return Http.get('/dataview/listConsumers')
  }
  // 获取资源总数
  static getResourceTotal() {
    return Http.get('/dataview/getResourceTotal')
  }
  // 获取资源总数
  static getRecordOverview() {
    return Http.get('/dataview/getRecordOverview')
  }
  // 获取流入数据排名
  static listInputOverview() {
    return Http.get('/dataview/listInputOverview')
  }
  // 获取流出数据排名
  static listOutputOverview() {
    return Http.get('/dataview/listOutputOverview')
  }
  // 获取定时器时间
  static getInterval() {
    return Http.get('/dataview/getInterval')
  }
  // 获取所有学生
  static getAll() {
    return Http.get('/students/getAll')
  }
}
