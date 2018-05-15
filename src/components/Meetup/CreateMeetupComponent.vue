<template lang="html">
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="orange--text">Create a new Meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              id="title"
              name="title"
              label="Title"
              :rules="[v => !!v || 'Title is required',(v) => v.length <= 50 || 'Max 50 characters']"
              :counter="50"
              v-model="title"
              required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              id="location"
              name="location"
              label="Location"
              :rules="[v => !!v || 'Location is required',(v) => v.length <= 50 || 'Max 50 characters']"
              :counter="50"
              v-model="location"
              required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              id="image-url"
              name="imageUrl"
              label="Image URL"
              :rules="[v => !!v || 'Image URL is required',(v) => v.length <= 500 || 'Max 500 characters']"
              :counter="500"
              v-model="imageUrl"
              required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              id="description"
              name="description"
              label="Description"
              :rules="[v => !!v || 'Description is required',(v) => v.length <= 100 || 'Max 100 characters']"
              :counter="100"
              v-model="description"
              required
              multi-line
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn color="orange" class="white--text" :disabled="!valid" @click="submit">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      title: '',
      location: '',
      imageUrl: '',
      description: ''
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date()
        }

        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
}
</script>

<style lang="css">
</style>
