<template>
  <div class="hello">
    <el-row class="my-nav">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="test">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span>导航一thysama</span>
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
          <el-menu-item index="2">
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
        <div class="edit-panel">
          <el-collapse v-model="activeNames">
            <el-collapse-item title="一致性 Consistency" name="1">
              <el-select v-model="value5" multiple placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
          <img v-lazy="imgObj"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { src, trace } from '../assets/mount.png';
import logoSrc from './../assets/logo.png';

export default {
  name: 'HelloWorld',
  data () {
    return {
      src,
      logoSrc,
      trace,
      imgObj: {
        src: src,
        loading: trace
      },
      msg: 'Welcome to Your Vue.js App',
      activeNames: ['1'],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value5: []
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

  .edit-panel {
    padding: 20px;
  }
</style>
