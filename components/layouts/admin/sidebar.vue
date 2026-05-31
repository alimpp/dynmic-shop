<template>
  <div
    class="sidebar-content flex flex-column fade-animation"
    v-if="hiddenState"
    :class="{
      'w-250-px': isOpen,
      'w-70-px': !isOpen,
      'custom-radius-fa-lang': locale == 'fa',
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
          name="arrow-right"
          class="mx-10 cursor-pointer desktop-icon"
          v-if="isOpen && locale == 'fa'"
          @click="handleChangeSidebarState(false)"
        />
        <BaseIcon
          name="arrow-left"
          class="mx-10 cursor-pointer desktop-icon"
          v-if="isOpen && locale == 'en'"
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
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

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
.custom-radius-fa-lang {
  border-radius: 30px 0 0 30px !important;
}
.sidebar-content {
  height: 100vh;
  overflow: hidden;
  background: #011325;
  color: #fff;
  border-radius: 0 30px 30px 0;
}
.mobile-icon {
  display: none;
}

@media (max-width: 600px) {
  .sidebar-content {
    position: fixed;
    z-index: 100;
    width: 100%;
    border-radius: 0 !important;
  }
  .desktop-icon {
    display: none;
  }
  .mobile-icon {
    display: flex;
  }
}
</style>
