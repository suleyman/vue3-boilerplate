<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld message="Hello Vue 3 + TypeScript + Vite" />
  <router-link to="/contact">
    Contact Page
  </router-link>
  <Users :users="users" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getAllUsers } from "@/api/services/user";
import { IUser } from "@/interfaces/user";
import HelloWorld from "@/components/HelloWorld.vue";
import Users from "@/components/Users.vue";

export default defineComponent({
  name: "home",
  components: { Users, HelloWorld },
  setup(props) {
    const users = ref<IUser[]>();
    onMounted(() => {
      getAllUsers().then(response => {
        users.value = response.data;
      });
    });


    return {
      users
    };
  }
});
</script>