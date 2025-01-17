import { ref } from "vue";
import axios, { AxiosError } from "axios";

export function useFormErrors() {
    const errors = ref<Record<string, string[]>>({});

    function handleApiError(error: unknown) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<{ errors: Record<string, string[]> }>;

            if (axiosError.response) {
                if (axiosError.response.status === 422) {
                    // Errores de validación
                    errors.value = axiosError.response.data.errors;
                } else if (axiosError.response.status === 401) {
                    // Error de credenciales
                    errors.value = { general: ["Credenciales incorrectas. Por favor, verifica tu email y contraseña."] };
                } else {
                    // Otros errores
                    errors.value = { general: ["Imposible procesar la solicitud. Por favor, intenta de nuevo."] };
                }
            } else {
                // Error cuando no hay respuesta de la API
                errors.value = { general: ["No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet."] };
            }
        } else {
            // Error desconocido
            errors.value = { general: ["Ocurrió un error inesperado. Por favor, intenta de nuevo."] };
        }
    }

    return { errors, handleApiError };
}
