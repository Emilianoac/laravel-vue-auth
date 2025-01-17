<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";

defineOptions({
    layout: "Layout"
})
</script>

<template>
    <AppHeader />
    <main class="mt-6 p-4">
        <slot></slot>
    </main>
</template>
