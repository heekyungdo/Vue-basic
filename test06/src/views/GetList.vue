<template>
  <div></div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      list: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getList()
  },
  unmounted() {},
  methods: {
    async getList() {
      this.list = await this.$api('/api/getList', 'get', {}) //http://localhost:3000/api/getList이 붙어있는거
    }
  }
}
</script>
