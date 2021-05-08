<template>
  <div class="user_edit">
    <nav-bar />
    <edit-info />
    <edit-back />
  </div>
</template>

<script>
import NavBar from '@/components/content/NavBar'
import EditInfo from './childComps/EditInfo'
import EditBack from './childComps/EditBack'

export default {
  components: {
    NavBar,
    EditInfo,
    EditBack
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  .d {
    justify-content: center;
    align-items: center;
  }
</style>
