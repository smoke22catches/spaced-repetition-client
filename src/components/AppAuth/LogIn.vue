<template>
    <v-form>
        <v-container class="app-login d-flex flex-column align-center pt-15">
            <v-row>
                <v-col>
                    <v-text-field label="Username" name="username" id="username"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field label="Password" type="password" name="password" id="password"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn>Log In</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>