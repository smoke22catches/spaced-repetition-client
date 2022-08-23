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
            <v-dialog v-model="createGroupDialog">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-title v-bind="attrs" v-on="on">Group</v-list-item-title>
              </template>
              <add-group-form></add-group-form>
            </v-dialog>
          </v-list-item>
          <v-list-item>
            <v-dialog v-model="createCardDialog">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-title v-bind="attrs" v-on="on">Card</v-list-item-title>
              </template>
              <add-card-form></add-card-form>
            </v-dialog>
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
import AddGroupForm from '@/components/AddGroupForm.vue';
import AddCardForm from '@/components/AddCardForm.vue';

export default Vue.extend({
  name: 'App',
  components: { AddGroupForm, AddCardForm },
  data: () => ({
    createGroupDialog: false,
    createCardDialog: false,
  }),
});
</script>
