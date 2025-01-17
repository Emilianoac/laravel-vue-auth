<script lang="ts" setup>
import { useTheme } from "../composables/useTheme";
import IconMoon from "./icons/IconMoon.vue";
import IconSun from "./icons/IconSun.vue";

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <button
    @click="toggleTheme"
    :title="isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
    class="theme-toggle-button"
  >
    <component :is="isDark ? IconSun : IconMoon" />
  </button>
</template>

<style lang="postcss" scoped>
.theme-toggle-button {
  @apply h-8 w-8;
  @apply flex items-center justify-center;
  @apply rounded-full p-2;
  @apply bg-slate-200 dark:bg-slate-800;
  @apply p-1;

  &:hover {
    @apply bg-slate-300 dark:bg-gray-700;
  }

  svg {
    @apply h-4 w-4;
  }
}
</style>
