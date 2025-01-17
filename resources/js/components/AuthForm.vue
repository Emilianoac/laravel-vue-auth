<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import AppLoader from "./AppLoader.vue";

interface Message {
    text: string;
    link: string;
    linkText: string;
}

const props = defineProps<{
    form: Record<string, { value: any; label: string, layout: string }>;
    errors: Record<string, string[]>;
    submitText: String;
    message: Message;
    title: String;
    isloading: boolean;
    onSubmit: Function;
}>();

async function handleSubmit() {
    props.onSubmit();
}
</script>

<template>
    <AppLoader v-if="isloading" />
    <form class="app-form" @submit.prevent="handleSubmit">
        <h1 class="app-form__title">{{ title }}</h1>

        <!-- Campos del formulario -->
        <div class="app-form__grid">
            <div
                v-for="(field, key) in form"
                :key="key"
                :class="[
                    'app-form__field',
                    field.layout === 'half' ? 'app-form__field--half' : 'app-form__field--full',
                ]"
            >
                <label :for="key">{{ field.label }}</label>
                <input
                    :type="key === 'password' ? 'password' : 'text'"
                    :id="key"
                    v-model="field.value"
                />
                <p v-if="errors[key]" class="app-form__error">{{ errors[key][0] }}</p>
            </div>
        </div>

        <!-- Errores generales -->
        <div
            v-if="errors.general"
            class="app-form__error mb-4"
            v-for="(error, index) in errors.general"
            :key="index"
        >
            {{ error }}
        </div>

        <button class="app-form__button" type="submit">
            {{ submitText }}
        </button>

        <p class="text-center mt-4 text-sm">
            {{ message.text }}
            <Link :href="message.link" class="text-blue-500">
                {{ message.linkText }}
            </Link>
        </p>
    </form>
</template>

<style lang="postcss">
.app-form {
    @apply p-4 bg-white dark:bg-slate-800;
    @apply shadow-md max-w-[450px] mx-auto rounded;
}

.app-form__title {
    @apply text-center font-bold text-xl mb-5;
}

.app-form__grid {
    @apply grid gap-2;
    @apply grid-cols-1 md:grid-cols-2;
}

.app-form__field {
    @apply mb-2 last:mb-0;

    label {
        @apply block font-semibold text-sm mb-1;
    }

    input {
        @apply bg-gray-50 dark:bg-slate-800 p-2 w-full rounded;
        @apply text-slate-800 dark:text-slate-200;
        @apply border border-slate-200 dark:border-slate-700;
        @apply focus-within:border focus-within:border-blue-500 focus-within:outline-none;
    }
}

.app-form__field--half {
    @apply col-span-2 md:col-span-1;
}

.app-form__field--full {
    @apply col-span-2;
}

.app-form__error {
    @apply text-red-500 text-xs mt-1;
}

.app-form__button {
    @apply block w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4;
    @apply hover:bg-blue-600;
}
</style>
