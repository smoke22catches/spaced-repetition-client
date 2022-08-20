<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn color="green">Practice all cards</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">Add <v-icon>mdi-star</v-icon></v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Group</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Card</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
