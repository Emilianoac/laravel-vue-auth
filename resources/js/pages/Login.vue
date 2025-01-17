<script setup lang="ts">
import { reactive, ref } from "vue";
import { router, Head } from "@inertiajs/vue3";
import axios from "axios";
import { useFormErrors } from "../composables/useFormErrors";
import AuthForm from "../components/AuthForm.vue";

const loginForm = reactive({
    email: { value: "", label: "Correo Electrónico", layout: "full" },
    password: { value: "", label: "Contraseña", layout: "full" },
});

const isloading = ref(false);

const { errors, handleApiError } = useFormErrors();

async function handleLogin() {
    isloading.value = true;
    try {
        const payload = Object.fromEntries(
            Object.entries(loginForm).map(([key, field]) => [key, field.value])
        );

        await axios.post("/login", payload);
        router.get("/");

    } catch (error) {
        handleApiError(error);
    } finally {
        isloading.value = false;
    }
};
</script>

<template>
    <Head title="Iniciar sesión"/>
    <AuthForm
        :form="loginForm"
        :errors="errors"
        title="Iniciar sesión"
        submitText="Iniciar sesión"
        :message="{
            text: 'No tienes una cuenta?',
            link: '/register',
            linkText: 'Regístrate',
        }"
        :isloading="isloading"
        :onSubmit="handleLogin"
    />
</template>

<style lang="postcss">

</style>
