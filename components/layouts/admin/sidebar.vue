<template>
  <div
    class="sidebar-content flex flex-column fade-animation"
    v-if="hiddenState"
    :class="{
      'w-250-px': isOpen,
      'w-70-px': !isOpen,
    }"
  >
    <div class="logo-content flex align-center h-60-px">
      <div
        class="w-50 flex px-10"
        :class="{ 'w-50-px': !isOpen, 'justify-center align-center': !isOpen }"
      >
        <img src="/public/logo/logo.png" alt="logo" width="100" />
      </div>
      <div class="w-50 flex justify-end" v-if="isOpen">
        <BaseIcon
          name="arrow-left"
          class="mx-10 cursor-pointer desktop-icon"
          v-if="isOpen"
          @click="handleChangeSidebarState(false)"
        />
        <BaseIcon
          name="close"
          class="mx-10 cursor-pointer mobile-icon"
          @click="emit('handleHiddenState', false)"
        />
      </div>
    </div>
    <div class="routes-content flex flex-column">
      <LayoutsAdminRoutesContent
        :sidebarState="isOpen"
        @openSidebar="handleChangeSidebarState(true)"
      />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["handleChangeSidebarState", "handleHiddenState"]);

const props = defineProps({
  isOpen: { type: Boolean },
  hiddenState: { type: Boolean },
});

const handleChangeSidebarState = (val) => {
  emit("handleChangeSidebarState", val);
};
</script>

<style scoped>
.sidebar-content {
  height: 100vh;
  overflow: hidden;
  background: #69abf2;
  color: #fff;
}
.mobile-icon {
  display: none;
}

@media (max-width: 600px) {
  .sidebar-content {
    position: fixed;
    z-index: 100;
    width: 100%;
  }
  .desktop-icon {
    display: none;
  }
  .mobile-icon {
    display: flex;
  }
}
</style>
