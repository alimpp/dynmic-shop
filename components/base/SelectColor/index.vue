<template>
  <div class="flex flex-column">
    <span class="f-s-16 f-w-500">{{ $t(title) }}</span>
    <div class="flex flex-wrap mt-5">
      <div
        class="flex flex-column align-center justify-center mx-5 mt-10"
        v-for="(value, index) in colors"
        :key="index"
      >
        <div
          :class="{ 'active-style': selectedItem == value }"
          class="w-70-px h-70-px border-rounded cursor-pointer"
          :style="{ background: value }"
          @click="emit('selectColor', value)"
        ></div>
        <BaseIcon name="checkFill" v-if="selectedItem == value" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { colors } from "../../../consts/colors";

const emit = defineEmits(["selectColor"]);

const props = defineProps({
  title: { type: String, default: "Select Color" },
  selectedItem: { type: String, default: "#ffffff" },
});
</script>

<style scoped>
.active-style {
  border: 1px solid #00000022;
  border-radius: 10px;
  padding: 5px;
}
</style>
