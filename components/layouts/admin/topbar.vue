<template>
  <div class="topbar-container">
    <div class="flex align-center w-50 px-10"></div>
    <div class="flex align-center justify-end w-50 px-10">
      <BaseIcon
        name="menu"
        class="cursor-pointer mobile-style"
        @click="emit('handleHiddenState', true)"
      />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["handleHiddenState"]);
</script>

<style scoped>
.topbar-container {
  width: 100%;
  min-height: 60px;
  max-height: 60px;
  display: flex;
  box-shadow: 1px 1px 1px 1px #00000023;
  border-radius: 5px;
}
.mobile-style {
  display: none;
}

@media (max-width: 600px) {
  .mobile-style {
    display: flex;
  }
}
</style>
