<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <div>直接获取count:{{this.$store.state.count}}</div>
      <div>使用计算属性获取count:{{count_app}}</div>
      <div>
        <button style="border:1px solid #000" @click="btnClick_m">使用mutation使count+10</button>
      </div>
      <div>
        <button style="border:1px solid #000" @click="btnClick_a">使用action使count+20</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      count_app: state => state.count
    })
  },
  methods: {
    btnClick_m() {
      this.$store.commit('add_count', 10)
    },
    btnClick_a() {
      this.$store.dispatch('add_count_action', 20)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
