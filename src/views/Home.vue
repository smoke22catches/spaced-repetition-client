<template>
  <div class="home">
    <app-cards-list></app-cards-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppAuth from '@/components/AppAuth.vue';
import LogIn from '@/components/AppAuth/LogIn.vue';
import SignUp from '@/components/AppAuth/SignUp.vue';
import AppCardsList from '@/components/AppCardsList.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    AppAuth,
    LogIn,
    SignUp,
    AppCardsList,
  },
});
</script>
