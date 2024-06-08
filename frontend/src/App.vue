<script setup>

import {ref} from 'vue';

const selectedKeys = ref(['1']);
</script>

<template>
  <a-modal>当前路由路径: {{ $route.fullPath }}</a-modal>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo"></div>
      <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{lineHeight: '60px'}">
        <a-menu-item key="1" @click="goToHome">首页
<!--
          <router-link to="/">首页</router-link>
-->
        </a-menu-item>
        <a-menu-item key="2" @click="goToBookList">列表
<!--
          <router-link to="/book">列表</router-link>
-->
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>测试1</a-breadcrumb-item>
        <a-breadcrumb-item>测试2</a-breadcrumb-item>
        <a-breadcrumb-item>测试3</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <a-config-provider>
          <div id="app">
            <router-view/>

          </div>

        </a-config-provider>
      </div>

    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2024 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script>

export default {
  name: "App",
  methods: {
    goToHome() {
      console.log("click goToHome!")
      this.$router.push("/");
    },
    goToBookList() {
      console.log("click goToBookList!")
      this.$router.push("/book");

    }
  }
}

</script>

<style scoped>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}

#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
