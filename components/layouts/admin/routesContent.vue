<template>
  <div class="routes-content">
    <div
      class="flex flex-column px-10 mt-10"
      v-for="route in routes"
      :key="route.id"
    >
      <div
        class="flex cursor-pointer"
        :class="{ 'justify-center': !sidebarState }"
        @click="handleOpenChild(route)"
      >
        <BaseIcon :name="route.icon" size="20" />
        <div class="w-100" v-if="sidebarState">
          <span class="f-s-15 f-w-600">{{ route.name }}</span>
        </div>
        <div v-if="sidebarState">
          <BaseIcon name="arrow-up" v-if="route.open" />
          <BaseIcon name="arrow-down" v-else />
        </div>
      </div>
      <div
        class="flex flex-column px-20 pt-5 fade-animation children-style"
        v-for="child in route.childs"
        v-if="route.open && sidebarState"
      >
        <div class="flex align-center">
          <BaseIcon name="dot" />
          <span class="f-s-13 f-w-600 cursor-pointer">{{ child.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { routes } from "../../../consts/admin";

const emit = defineEmits(["openSidebar"]);

const props = defineProps({
  sidebarState: { type: Boolean },
});

const handleOpenChild = (route) => {
  const target = routes.value.find((item) => {
    return item.id == route.id;
  });
  target.open = !target.open;
  emit("openSidebar");
};
</script>

<style scoped>
.routes-content {
  height: 85vh;
  overflow-y: auto;
}
.children-style{
  color: #dbd3d3;
}
.routes-content::-webkit-scrollbar {
  display: none;
}
</style>
