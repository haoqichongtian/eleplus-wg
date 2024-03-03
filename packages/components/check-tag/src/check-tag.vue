<template>
  <span :class="containerKls" @click="handleChange">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { CHANGE_EVENT } from "@wg-plus/constants";
import { useNamespace } from "@wg-plus/hooks";
import { checkTagEmits, checkTagProps } from "./check-tag";

defineOptions({
  name: "ElCheckTag"
});
const props = defineProps(checkTagProps);
const emit = defineEmits(checkTagEmits);

const ns = useNamespace("check-tag");
const containerKls = computed(() => [
  ns.b(),
  ns.is("checked", props.checked),
  ns.m(props.type || "primary")
]);

const handleChange = () => {
  const checked = !props.checked;
  emit(CHANGE_EVENT, checked);
  emit("update:checked", checked);
};
</script>
