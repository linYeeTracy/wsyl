import { getCustom } from '@/api/custom'
import moment from 'moment'
export default {
  state: {
    tableData: []
  },
  mutations: {
    setTableData (state, tableData) {
      console.log(state)
      state.tableData = tableData
    }
  },
  actions: {
    // 获取表格数据
    getCustom ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getCustom().then(res => {
            const data = res.data.data.map((v, i) => {
              v.gender = v.gender === 'male' ? '男' : '女'
              v.birthday && (v.birthday = moment(v.birthday).format('YYYY-MM-DD'))
              v.weddingday && (v.weddingday = moment(v.weddingday).format('YYYY-MM-DD'))
              return v
            })
            commit('setTableData', data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
