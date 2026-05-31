<template>
  <div class="layout-container">
    <div class="sidebar-container">
      <LayoutsAdminSidebar
        :isOpen="sidebarState"
        :hiddenState="hiddenState"
        @handleChangeSidebarState="handleChangeSidebarState"
        @handleHiddenState="handleHiddenState"
      />
    </div>

    <div class="main-content">
      <header class="topbar-container">
        <LayoutsAdminTopbar @handleHiddenState="handleHiddenState" />
      </header>

      <main class="page-content">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
const sidebarState = ref(true);
const hiddenState = ref(true);

const handleChangeSidebarState = (val) => {
  sidebarState.value = val;
};

const handleHiddenState = (val) => {
  hiddenState.value = val;
};
</script>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar-container {
  flex-shrink: 0;
  background-color: #f4f4f4;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px;
}

.topbar-topbar-container {
  height: 60px;
  flex-shrink: 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.page-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 5px 0;
}
.page-content::-webkit-scrollbar {
  display: none;
}
</style>
