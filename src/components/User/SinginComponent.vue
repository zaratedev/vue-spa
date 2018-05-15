<template lang="html">
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-alert type="error" dismissible v-model="error">
          {{ mensajeError }}
				</v-alert>
			  <v-card class="elevation-12">
          <v-toolbar dark color="primary">
						<v-toolbar-title>Sing in</v-toolbar-title>
					</v-toolbar>
			    <v-card-text>
			      <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field label="Email" prepend-icon="person" v-model="email" :rules="emailRules" required></v-text-field>
              <v-text-field label="Password" prepend-icon="lock" v-model="password" :rules="namePassword" required
						      :append-icon="viewpassword ? 'visibility' : 'visibility_off'"
						      :type="viewpassword ? 'password' : 'text'"
						      :append-icon-cb="() => (viewpassword = !viewpassword)"
						    ></v-text-field>
			  		</v-form>
			   </v-card-text>
         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn color="primary" :disabled="!valid">Sing in</v-btn>
         </v-card-actions>
       </v-card>
     </v-flex>
   </v-layout>
 </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      viewpassword: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail debe de ser válido'
      ],
      password: '',
      namePassword: [
        v => !!v || 'Password is required'
      ],
      error: false,
      mensajeError: ''
    }
  }
}
</script>

<style lang="css">
</style>
