<template>
    <v-container class="app-auth d-flex flex-column align-center pt-15">
        <v-row>
            <v-col>
                <v-btn color="primary" @click="onLoginClick">Log In</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p>or</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn @click="onSignupClick">Sign Up</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    methods: {
        onLoginClick: function() {
            this.$router.push({ name: "Login" })
        },
        onSignupClick: function() {
            this.$router.push({ name: "Signup" })
        }
    }
}
</script>

<style>
    .app-auth {
        width: 0;
        margin: 0 auto;
    }
</style>
