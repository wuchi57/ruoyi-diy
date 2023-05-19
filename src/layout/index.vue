<script setup>
import AppMain from 'layout/AppMain.vue'
import NavBar from 'layout/NavBar.vue'
import Settings from 'layout/Settings.vue'
import SideBar from 'layout/SideBar.vue'
import TagsView from 'layout/TagsView.vue'

</script>

<template>
  <div class="app-wrapper">
    <div v-if="false" class="drawer-bg" />
    <SideBar class="bd"/>
    <div class="main-container">
      <div>
        <NavBar/>
        <TagsView/>
      </div>
      <AppMain />
      <Settings/>
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid red;
}
.app-wrapper.mobile.openSidebar {
  position: fixed;
  top: 0;
}
.drawer-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 999;
  background: #000;
  opacity: 0.3;
}
.fix-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - theme('width.base.sidebar'));
}
.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}
.sidebarHide .fixed-header {
  width: 100%;
}
.mobile .fixed-header {
  width: 100%;
}
</style>