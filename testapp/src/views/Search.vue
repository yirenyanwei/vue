<template>
    <div>
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
        />

        <ul v-if="value">
          <li v-for="data in computedList" :key="data.cinemaId">
            <div class="left">
              <div class="cinema-name">{{ data.name }}</div>
              <div class="cinema-text">{{ data.address }}</div>
            </div>
            <div class="right cinema-name">
              <div style="color: orange">￥{{ data.lowPrice / 100 }}起</div>
            </div>
          </li>
        </ul>
    </div>
</template>
<script>
import mixinObj from '@/util/mixinObj'
export default {
    mixins: [mixinObj],
    data() {
        return {
            value: ''
        }
    },
    mounted() {
        if(this.$store.state.cinemaList.length<=0) {
            this.$store.dispatch('getCinemaData')
        }
    },
    computed:{
        computedList() {
            let list = this.$store.state.cinemaList
            return list.filter(item=>item.name.toUpperCase().includes(this.value.toUpperCase()||item.address.toUpperCase().includes(this.value.toUpperCase())))
        }
    },
    methods: {
        onSearch() {

        },
        onCancel() {
            this.$router.back()
        }
    }
}
</script>
<style lang="scss" scoped>
li {
  padding: 0.9375rem;
  display: flex;
  justify-content: space-between;
  .left {
    width: 13.25rem;
  }
  .cinema-name {
    font-size: 15px;
  }
  .cinema-text {
    color: #797d82;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

</style>