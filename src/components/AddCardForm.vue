<template>
    <v-card>
        <v-form>
            <v-container>
                <v-row>
                    <v-col><v-card-title>Add Group</v-card-title></v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field label="Question"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea label="Answer"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn>Add Card</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>
</template>