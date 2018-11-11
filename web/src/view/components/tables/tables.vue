<template>
  <div>
    <Card>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getCustom } from '@/api/custom'
export default {
  name: 'tables_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '姓名', key: 'name'},
        {title: '性别', key: 'gender'},
        {title: '手机号', key: 'phone'},
        {title: '生日', key: 'birthday'},
        {title: '结婚纪念日', key: 'weddingday'},
        {title: '直接介绍人', key: 'introducer'},
        {title: '邮箱', key: 'email', editable: true},
        {title: '家庭住址', key: 'address', editable: true},
        {title: '备注', key: 'comment', editable: true},
        {
          title: 'Handle',
          key: 'handle',
          // options: ['delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    // vm.$emit('on-delete', params)
                    // vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))

                  }
                }
              }, [
                h('Button', '买单')
              ])
            }
          ]
        }
      ],
      tableData: []
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  mounted () {
    getCustom().then(res => {
      console.log(res)
      this.tableData = res.data.data
    })
  }
}
</script>

<style>

</style>
