<template>
  <h1 data-test-id="message">{{ message }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent, PropType } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    message: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const count = ref(0);
    onMounted(() => {
      console.log("mounted");
    });

    return {
      count
    };
  }
});
</script>