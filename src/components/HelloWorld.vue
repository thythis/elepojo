<template>
  <div class="hello">
    <el-row class="my-nav">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          :router="true"
          active-text-color="#ffd04b"
          @select="test">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span>thy</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="test">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    test(index) {
      console.log(index);
    },
    showTrace() {
      console.log(this.trace);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello, .hello .my-nav, .hello .my-nav .el-col, .hello .my-nav .el-col .el-menu {
    height: 100%;
  }

</style>
