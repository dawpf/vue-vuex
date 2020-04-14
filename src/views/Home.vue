<template>
  <div class="home">
    <div>--------以下为home模块内容---------</div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>直接获取count:{{this.$store.state.home.count_home}}</div>
    <div>使用计算属性获取count:{{count_home}}</div>
    <div>
      <button style="border:1px solid #000" @click="btnClick_m">使用mutation使count+10</button>
    </div>
    <div>
      <button style="border:1px solid #000" @click="btnClick_a">使用action使count+20</button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      count_home: state => state.home.count_home
    })
  },
  methods: {
    btnClick_m() {
      this.$store.commit('add_count_home', 10)
    },
    btnClick_a() {
      this.$store.dispatch('add_count_home_action', 20)
    }
  }
}
</script>
