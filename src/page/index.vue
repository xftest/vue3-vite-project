<template>
  <div class="index">
    <h2>sddssdsd</h2>
    {{ age }}-{{ obj.id }}
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
const age = ref(18);
const obj = reactive({
  id: 0,
});

obj.id = 1;
age.value = 1;
</script>

<style lang="scss">
.index {
  height: 10px;
  h2 {
    color: red;
  }
}
</style>
