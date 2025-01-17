<script lang="ts" setup>
import { Head } from "@inertiajs/vue3";
import IconUser from "../components/icons/IconUser.vue";
import IconLogout from "../components/icons/IconLogout.vue";

interface User {
    name: string;
    lastname: string;
    phone: string;
    email: string;
}

defineProps<{ user: User }>();
</script>

<template>
    <Head>
        <title>Home</title>
    </Head>
    <div class="user-card">
        <IconUser class="user-card-icon" :width="80" :height="80" />
        <div class="user-card__item">
            <span class="item-title">Nombre</span>
            <span class="item-value">{{ user.name }}</span>
        </div>
        <div class="user-card__item">
            <span class="item-title">Apellido</span>
            <span class="item-value">{{ user.lastname }}</span>
        </div>
        <div class="user-card__item">
            <span class="item-title">Correo electronico</span>
            <span class="item-value">{{ user.email }}</span>
        </div>
        <div class="user-card__item">
            <span class="item-title">Teléfono</span>
            <span class="item-value">{{ user.phone }}</span>
        </div>

        <a class="user-card-logout" href="/logout">Cerrar sesión
            <IconLogout class="inline-block" :width="20" :height="20" />
        </a>
    </div>
</template>

<style lang="postcss">

.user-card {
    @apply bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md;
    @apply max-w-[400px] mx-auto;

    .user-card-icon {
        @apply mx-auto mb-4;
        @apply text-gray-500 dark:text-gray-400;
    }

    .user-card__item {
        @apply flex flex-col;
        @apply py-2;
        @apply border-b border-gray-200 dark:border-gray-700;

        .item-title {
            @apply font-semibold mb-1;
        }

        .item-value {
            @apply text-sm;
        }
    }

    .user-card-logout {
        @apply block mt-4 text-center text-red-500 dark:text-red-400;
        @apply font-semibold;
        @apply hover:text-red-600 dark:hover:text-red-500;
    }
}

</style>
