<template>
  <div>
    <Row>
      <Card shadow>
        <timeline>
          <timeline-title>纪念日提醒</timeline-title>
          <timeline-item v-for="(perday, perdayIndex) in warnList" :key="perdayIndex" bg-color="#9dd8e0">
            <div>
              <h1>{{getDateDesc(perday, perdayIndex)}}</h1>
              <ul v-if="perday && perday.length">
                <li v-for="(warn, warnIndex) in perday" :key="warnIndex">
                  <!-- 客户：{{item.name}},手机号：{{item.phone}}的生日 -->
                  <div v-if="isBirth(warn, perdayIndex)">
                    <Tag style="margin-right:10px" color="success">生日纪念日</Tag>
                    <Tag color="primary">{{warn.name}}</Tag>
                    <Tag color="warning">{{warn.phone}}</Tag>
                  </div>
                  <div v-if="isWedding(warn, perdayIndex)">
                    <Tag style="margin-right:10px" color="#ffa2d3">结婚纪念日</Tag>
                    <Tag color="primary">{{warn.name}}</Tag>
                    <Tag color="warning">{{warn.phone}}</Tag>

                  </div>
                  <div v-if="isBirth100(warn, perdayIndex)">
                    <Tag style="margin-right:10px" color="success">百日纪念日</Tag>
                    <Tag color="primary">{{warn.name}}</Tag>
                    <Tag color="warning">{{warn.phone}}</Tag>

                  </div>
                </li>
              </ul>
              <div v-else>暂无提醒</div>
            </div>
          </timeline-item>
          <!-- <timeline-item :hollow="true">
            <div>
              <h1>明天</h1>
              <div>当日提醒</div>
            </div>
          </timeline-item> -->
        </timeline>
      </Card>
    </Row>
  </div>
</template>
<style>
.timeline-circle {
  top: 1.08em;
}
.timeline-title-circle {
  top: .15em;
}
</style>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
import {getCustom} from '@/api/custom'
import moment from 'moment'

export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example,
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  data () {
    return {
      warnList: [],
      inforCardData: [
        { title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '累计点击', icon: 'md-locate', count: 232, color: '#19be6b' },
        { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
      ],
      pieData: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  mounted () {
    getCustom({byDate: true}).then(res => {
      this.warnList = res.data.data
    })
  },
  methods: {
    getDateDesc (perday, perdayIndex) {
      switch (perdayIndex) {
        case 0:
          return '今天'
          break
        case 1:
          return '明天'
          break
        case 2:
          return '后天'
          break
        default:
          return moment().add(perdayIndex, 'days').format('L')
      }
    },
    isBirth (warn, index) {
      return moment(warn.birthday).diff(moment(), 'days') === index
    },
    isWedding (warn, index) {
      return moment(warn.weddingday).diff(moment(), 'days') === index
    },
    isBirth100 (warn, index) {
      return warn.isRemind
    },
    compareDate () {

    }
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
