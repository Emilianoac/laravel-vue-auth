<script lang="ts" setup>
    import AppThemeToggle from "./AppThemeToggle.vue";
</script>

<template>
    <header class="main-header">
        <nav class="navbar">
            <a class="navbar-title" href="/">COOL APP</a>
            <AppThemeToggle />
        </nav>
    </header>
</template>

<style lang="postcss">
.main-header {
    @apply bg-gray-50 dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-800;

    .navbar {
        @apply flex justify-between items-center;

        .navbar-title {
            @apply font-bold;
        }
    }
}
</style>
