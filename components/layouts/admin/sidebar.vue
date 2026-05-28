<template>
  <div class="sidebar-content w-250-px h-98-dvh flex flex-column">
    <div class="logo-content flex align-center justify-center">
      <img src="/public/logo/logo.png" alt="logo" width="100" />
    </div>
    <div class="routes-content flex flex-column">
      <LayoutsAdminRoutesContent />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.sidebar-content {
  border: 1px solid #00000016;
  border-radius: 10px;
}
</style>
