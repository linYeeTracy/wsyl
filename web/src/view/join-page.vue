<style>
.ivu-date-picker {
  width: 100%;
}
.submit-wrap {
  text-align: center;
}
</style>

<template>
  <Row>
    <Col span="12" offset="6">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入客户姓名"></Input>
        </FormItem>
        <FormItem label="手机号" prop="phone">
            <Input v-model="formValidate.phone" placeholder="请输入客户手机号"></Input>
        </FormItem>
        <FormItem label="性别" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="生日" prop="birthDate">
          <DatePicker type="date" placeholder="请输入客户生日" v-model="formValidate.birthDate"></DatePicker>
        </FormItem>
        <FormItem label="开启百日提醒" prop="isRemind">
          <RadioGroup v-model="formValidate.isRemind">
              <Radio label="1">是</Radio>
              <Radio label="0">否</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem label="结婚纪念日">
            <Row>
                <Col span="24">
                    <FormItem prop="weddingDate">
                        <DatePicker type="date" placeholder="请输入客户结婚纪念日" v-model="formValidate.weddingDate"></DatePicker>
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="介绍人" prop="introducer">
            <Input v-model="formValidate.introducer" placeholder="请输入介绍人姓名/手机号"></Input>
        </FormItem>
        <FormItem label="邮箱" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入客户邮箱"></Input>
        </FormItem>
        <FormItem label="家庭住址" prop="address">
            <Input v-model="formValidate.address" placeholder="请输入客户家庭住址"></Input>
        </FormItem>
        <FormItem label="备注" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入相关备注..."></Input>
        </FormItem>

    </Form>
  </Col>
</Row>

</template>
<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
