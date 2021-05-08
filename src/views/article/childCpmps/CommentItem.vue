<template>
  <div class="commentitems">
    <div v-for="item in commentChild" :key="item.index">
      <div class="commentitem" @click="iptShow(item)">
        <span v-if="!temp" class="items_name">{{item.userinfo.name}}：</span>
        <span v-else class="items_name">{{item.userinfo.name}}：<span>回复 @{{item.parent_user_info.name}}：</span></span>
        <span>{{item.comment_content}}</span>
      </div>
      <comment-item :commentChild="item.child" :temp="true" @iptShow="iptShow"></comment-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commentItem',
  props: ['commentChild', 'temp'],
  data () {
    return {
    }
  },
  methods: {
    iptShow (item) {
      this.$emit('iptShow', item)
    }
  }
}
</script>
<style scoped>
  .commentitems {
    background-color: #f4f4f4;
    /* padding: 10px 0; */
    font-size: 13px;
    border-radius: 5px;
    /* margin-left: 45px; */
  }
  .commentitem {
    margin-bottom: 8px;
  }
  .items_name {
    color: #5090cc;
  }
  .items_name span {
    color: #323232;
  }
</style>
