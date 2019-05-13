module.exports = {
  listProductors(info) {
    return {
      total: parseInt(Math.random() * 100),
      details: [
        {
          systemName: 'DI设计器',
          count: parseInt(Math.random() * 30)
        },
        {
          systemName: '实时交换',
          count: parseInt(Math.random() * 30)
        },
        {
          systemName: '数据资源库',
          count: parseInt(Math.random() * 30)
        },
        {
          systemName: '管控桌面',
          count: parseInt(Math.random() * 30)
        },
        {
          systemName: '交换门户',
          count: parseInt(Math.random() * 30)
        }
      ]
    }
  },
  listConsumers() {
    return {
      total: 43,
      details: [
        {
          systemName: 'DI设计器',
          count: parseInt(Math.random() * 30)
        },
        {
          systemName: '实时交换',
          count: parseInt(Math.random() * 30)
        },
        {
          systemName: '数据资源库',
          count: parseInt(Math.random() * 30)
        },
        {
          systemName: '管控桌面',
          count: parseInt(Math.random() * 30)
        }
      ]
    }
  },
  getResourceTotal() {
    return {
      total: Math.random() * 1000
    }
  },
  getRecordOverview() {
    return {
      all: Math.random() * 1000000000,
      in: Math.random() * 100000000,
      out: Math.random() * 100000000
    }
  },
  listInputOverview() {
    return [
      {
        systemName: 'DI设计器1',
        count: Math.random() * 1000
      },
      {
        systemName: '实时交换1',
        count: Math.random() * 1000
      },
      {
        systemName: '数据资源库1',
        count: Math.random() * 1000
      },
      {
        systemName: '管控桌面1',
        count: Math.random() * 1000
      },
      {
        systemName: '交换门户1',
        count: Math.random() * 1000
      }
    ]
  },
  listOutputOverview() {
    return [
      {
        systemName: 'DI设计器',
        count: Math.random() * 1000
      },
      {
        systemName: '实时交换',
        count: Math.random() * 1000
      },
      {
        systemName: '数据资源库',
        count: Math.random() * 1000
      },
      {
        systemName: '管控桌面',
        count: 9
      },
      {
        systemName: '交换门户',
        count: Math.random() * 1000
      }
    ]
  },
  getInterval() {
    return {
      input: 5000,
      output: 6000,
      record: 9000,
      resource: 15000,
      productor: 8000,
      consumer: 8000
    }
  }
}
