<template>
  <div class="flex flex-column">
    <BaseBreadCrumbs
      class="mt-10 mb-10"
      :source="['Styles', 'Main Background']"
    />
    <BaseSelectColor
      title="Please Select Color Main Background Application"
      :selectedItem="selectedItem"
      @selectColor="selectColor"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const selectedItem = ref("#ffffff");

const selectColor = (val) => {
  selectedItem.value = val;
};
</script>
