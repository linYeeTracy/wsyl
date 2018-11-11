import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
const Random = Mock.Random

export const getTableData = req => {
  let tableData = []
  doCustomTimes(200, () => {
    tableData.push(Mock.mock({
      name: '@cname()',
      email: '@email',
      createTime: '@date',
      phone: /^1[385][1-9]\d{8}/

    }))
  })
  return tableData
}

export const getDragList = req => {
  let dragList = []
  doCustomTimes(5, () => {
    dragList.push(Mock.mock({
      name: Random.csentence(10, 13),
      id: Random.increment(10)
    }))
  })
  return dragList
}
