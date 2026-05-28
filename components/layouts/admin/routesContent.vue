<template>
  <div
    class="flex flex-column px-10 mt-10"
    v-for="route in routes"
    :key="route.id"
  >
    <div class="flex cursor-pointer" @click="route.open = !route.open">
      <BaseIcon name="arrow-up" v-if="route.open" />
      <BaseIcon name="arrow-down" v-else />
      <span class="f-s-15 f-w-600">{{ route.name }}</span>
    </div>
    <div
      class="flex flex-column px-25 pt-5"
      v-for="child in route.childs"
      v-if="route.open"
    >
      <div class="flex align-center">
        <span class="f-s-13 f-w-600 cursor-pointer">{{ child.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { routes } from "../../../consts/admin";
</script>
