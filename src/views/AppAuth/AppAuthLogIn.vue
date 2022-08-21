<template>
    <v-form>
        <v-container class="app-login d-flex flex-column align-center pt-15">
            <v-row>
                <v-col>
                    <v-text-field label="Username" name="username" id="username" v-model="username"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field label="Password" type="password" name="password" id="password" v-model="password"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn @click="onLogin">Log In</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        username: '',
        password: ''
    }),
    methods: {
        onLogin: async function() {
            const responce = await axios.post("login", {
                username: this.username,
                password: this.password
            });
            localStorage.setItem("accessToken", responce.data.accessToken);
        }
    }
}
</script>