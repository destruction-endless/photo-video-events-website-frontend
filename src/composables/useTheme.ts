import { ref, onMounted } from "vue";

const theme = ref<"light" | "dark">("light");

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", theme.value === "dark");
    localStorage.setItem("theme", theme.value);
  };

  onMounted(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    theme.value = saved || "light";
    document.documentElement.classList.toggle("dark", theme.value === "dark");
  });

  return { theme, toggleTheme };
}
