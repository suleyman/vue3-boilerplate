<template>
  <div class="users">
    <div v-for="user in users" :key="user.id">
      <span data-test-id="name">{{ user.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IUser } from "@/interfaces/user";

export default defineComponent({
  name: "Users",
  props: {
    users: {
      type: Array as PropType<IUser[]>
    }
  }
});
</script>