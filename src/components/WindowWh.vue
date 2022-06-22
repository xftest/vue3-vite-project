<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// 获取浏览器窗口大小
export default () => {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const onUpdate = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => {
    window.addEventListener("resize", onUpdate);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", onUpdate);
  });

  return {
    width,
    height,
  };
};
</script>
