<template>
  <div class="home">
    <app-auth></app-auth>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppAuth from '@/views/AppAuth.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    AppAuth
  },
});
</script>
