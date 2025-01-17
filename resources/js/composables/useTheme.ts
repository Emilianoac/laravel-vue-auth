import { ref, watch, onMounted } from "vue";

export function useTheme() {
  const isDark = ref(true);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  watch(isDark, (newVal) => {
    const html = document.documentElement;
    if (newVal) {
      html.classList.add("dark");
      localStorage.setItem("dark", "true");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("dark", "false");
    }
  });

  onMounted(() => {
    const darkTheme = localStorage.getItem("dark");

    if (darkTheme === null) {
      isDark.value = true;
      localStorage.setItem("dark", "true");
    } else {
      isDark.value = darkTheme === "true";
    }

    const html = document.documentElement;
    if (isDark.value) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  });

  return { isDark, toggleTheme };
}
