<template>
  <div>
    <div class="edit_info">
      <div class="updateFile">
        <van-uploader class="uploadImg" preview-size="25vw" :after-read="afterRead" />
        <div class="edit_banner">
          <span>头像</span>
          <img :src="model.user_img" alt="" v-if="model.user_img">
          <img src="@/assets/img/default_img.jpg" alt="" v-else>
        </div>
      </div>
      <div class="edit_banner" @click="nickName = true">
        <span>昵称</span>
        <span>{{model.name}}</span>
      </div>
      <div class="edit_banner">
        <span>账号</span>
        <span>{{model.username}}</span>
      </div>
      <div class="edit_banner" @click="gendershow = true">
        <span>性别</span>
        <span>{{model.gender}}</span>
      </div>
      <div class="edit_banner" @click="autograph = true">
        <span>个性签名</span>
        <span>{{model.user_desc}}</span>
      </div>
    </div>
    <van-dialog v-model="nickName" title="昵称"
                show-cancel-button
                @confirm="nickNameConfirm">
      <van-field v-model="content" />
    </van-dialog>

    <van-dialog v-model="autograph" title="个性签名"
                show-cancel-button
                @confirm="autographConfirm">
      <van-field v-model="content" />
    </van-dialog>
    <van-action-sheet v-model="gendershow"
                      :actions="actions" @select="onSelect"
                      close-on-click-action />
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      model: {},
      nickName: false,
      autograph: false,
      content: '',
      gendershow: false,
      actions: [
        { name: '男', val: 0 },
        { name: '女', val: 1 }
      ]
    }
  },
  created () {
    this.getUserData()
  },
  methods: {
    async getUserData () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
      console.log(res)
    },
    async afterRead (file) {
      const formdata = new FormData()
      formdata.append('file', file.file)
      const res = await this.$http.post('/upload', formdata)
      // console.log(res)
      this.model.user_img = res.data.url
      this.userUpDate()
    },
    async userUpDate () {
      const res = await this.$http.post('/update/' + localStorage.getItem('id'), this.model)
      if (res.data.code) {
        this.$msg.success('修改成功')
      }
    },
    nickNameConfirm () {
      const rule = /^.{2,8}$/
      if (rule.test(this.content)) {
        this.model.name = this.content
        this.userUpDate()
      } else {
        this.$msg.fail('请输入2到8位字符')
      }
      this.content = ''
    },
    autographConfirm () {
      this.model.user_desc = this.content
      this.userUpDate()
      this.content = ''
    },
    onSelect (item) {
      this.model.gender = item.name
      this.userUpDate()
    }
  }
}

</script>
<style scoped>
  .edit_info {
    margin-top: 10px;
    background-color: #fff;
  }
  .edit_banner {
    padding: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
  }
  .updateFile {
    position: relative;
    overflow: hidden;
  }
  .uploadImg {
    position: absolute;
    right: 0;
    opacity: 0;
  }
  .edit_banner img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
</style>
