<script setup lang="ts"></script>

<template>
    <div class="loader" role="status">
        <div class="loader__spinner"></div>
    </div>
</template>

<style lang="postcss">
.loader {
    @apply fixed top-0 left-0 w-full h-screen;
    @apply flex justify-center items-center flex-col;
    @apply bg-black bg-opacity-30;
    @apply z-[999];
    backdrop-filter: blur(8px);

    .loader__spinner {
        @apply w-[50px] h-[50px];
        @apply border-[10px] border-solid border-[#f3f3f3] rounded-full;
        @apply border-t-blue-600;
        @apply rounded-full;
        animation: spin 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
