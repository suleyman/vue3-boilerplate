<template>
  <h1>{{ message }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    message: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const count = ref(0);
    onMounted(() => {

    });

    return {
      count
    };
  }
});
</script>