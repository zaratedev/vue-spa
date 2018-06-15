<template lang="html">
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-alert type="error" dismissible v-model="error">
          {{ mensajeError }}
        </v-alert>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sing up</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Email"
                prepend-icon="person"
                v-model="email"
                v-validate="'required|email'"
                :error-messages="errors.collect('email')"
                data-vv-name="email"
                required>
              </v-text-field>
              <v-text-field
                ref="password"
                name="password"
                label="Password"
                data-vv-name="password"
                data-vv-delay="300"
                min="6"
                v-validate="'required|min:6|max:100'"
                v-model="password"
                :error-messages="errors.collect('password')"
                hint="It should be a minimum of 6 characters"
                prepend-icon="lock"
                :append-icon="viewpassword ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (viewpassword = !viewpassword)"
                :type="viewpassword ? 'text' : 'password'">
              </v-text-field>
              <v-text-field
                label="Password confirmation"
                data-vv-name="password_confirmation"
                data-vv-delay="300"
                target= "password"
                v-validate="'required|confirmed:password'"
                v-model="confirmPassword"
                :error-messages="errors.collect('password_confirmation')"
                prepend-icon="lock"
                :append-icon="p2 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (p2 = !p2)"
                :type="p2 ? 'text' : 'password'"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submit">Sing up</v-btn>
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
      p2: true,
      email: '',
      password: '',
      confirmPassword: '',
      error: false,
      mensajeError: ''
    }
  },
  methods: {
    submit () {
      this.$validator.validate().then(result => {
        if (result) {
          this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
        }
      })
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="css">
</style>
