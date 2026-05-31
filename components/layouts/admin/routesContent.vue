<template>
  <div class="routes-content">
    <div
      class="flex flex-column px-10 mt-10"
      v-for="route in routes"
      :key="route.id"
    >
      <div
        class="flex cursor-pointer"
        :class="{
          'justify-center': !sidebarState,
          'active-parent': route.path === activeParent,
        }"
        @click="handleOpenChild(route)"
      >
        <BaseIcon :name="route.icon" size="20" />
        <div class="w-100 mx-5" v-if="sidebarState">
          <span class="f-s-15 f-w-600 px-3">{{ $t(route.name) }}</span>
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
        <div
          class="flex align-center"
          :class="{ 'active-child': child.route === activeChild }"
        >
          <BaseIcon name="dot" class="mt-5" v-if="child.route != activeChild" />
          <span class="f-s-13 f-w-600 cursor-pointer">{{
            $t(child.name)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

import { routes } from "../../../consts/admin";

const emit = defineEmits(["openSidebar"]);

const props = defineProps({
  sidebarState: { type: Boolean },
});

const activeParent = computed(() => {
  return route.path.split("/")[2];
});

const activeChild = computed(() => {
  return route.path.split("/")[3];
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
.active-parent {
  background: #2a024b;
  border-radius: 15px;
  padding: 3px 5px;
}
.active-child {
  border-bottom: 1px solid #ffffff28;
  padding: 8px 0;
}
.routes-content {
  height: 85vh;
  overflow-y: auto;
}
.children-style {
  color: #dbd3d3;
}
.routes-content::-webkit-scrollbar {
  display: none;
}
</style>
