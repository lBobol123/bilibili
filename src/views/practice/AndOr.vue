<template>
  <div>
    <!-- <span v-for="(a,i) in arr" :key="i">{{ a }}</span> -->
    <div v-for="(item, i) in list" :key="i">
      <div v-if="item.type === 3 && ((item.name === 'a' && item.age === 12) || item.color === 'redd')">可以</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [1, 2, 3],
      list: [
        {
          type: 3,
          name: 'a',
          age: 12,
          color: 'red'
        }
      ]
    }
  }
}
</script>
