<script setup lang="ts">
import { reactive, ref } from "vue";
import { router, Head } from "@inertiajs/vue3";
import axios from "axios";
import AuthForm from "../components/AuthForm.vue";
import { useFormErrors } from "../composables/useFormErrors";

const registerForm = reactive({
    name: { value: "", label: "Nombre", layout: "half" },
    lastname: { value: "", label: "Apellido", layout: "half" },
    phone: { value: "", label: "Teléfono", layout: "full" },
    email: { value: "", label: "Correo Electrónico", layout: "full" },
    password: { value: "", label: "Contraseña", layout: "full" },
});


const isloading = ref(false);

const { errors, handleApiError } = useFormErrors();

async function handleRegister() {
    isloading.value = true;
    try {
        const payload = Object.fromEntries(
            Object.entries(registerForm).map(([key, field]) => [key, field.value])
        );

        await axios.post("/register", payload);
        router.get("/");
    } catch (error) {
        handleApiError(error);
    } finally {
        isloading.value = false;
    }
}
</script>

<template>
    <Head title="Registrarse"></Head>
    <AuthForm
        :form="registerForm"
        :errors="errors"
        title="Registrarse"
        submitText="Registrarse"
        :message="{
            text: 'Ya tienes una cuenta?',
            link: '/login',
            linkText: 'Iniciar sesión',
        }"
        :isloading="isloading"
        :onSubmit="handleRegister"
    />
</template>

