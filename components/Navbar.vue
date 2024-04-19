<template>
  <div class="p-4 border-b flex items-center justify-start bg-white gap-x-5 shadow-sm ">
    <!-- Mobile => show drawer -->
    <MenuOutlined @click="showDrawer" class="md:hidden pr-4 hover:opacity-70 transition"/>
    <a-drawer :placement="'left'" :open="open" @close="onClose">
      <Sidebar class="p-0 bg-white"/>
    </a-drawer>
    <!-- PC => show sidebar -->
    <span class="text-gray-500 font-extrabold">
      Company&apos;s Resource Management System
    </span>
  </div>
</template>
<script lang="ts">
import Sidebar from './Sidebar.vue';

export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    showDrawer(){
      this.open = true;
    },
    onClose(){
      this.open = false;
    },
  }
}


</script>