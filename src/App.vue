<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      clipped
      v-model="drawer">
      <v-list>
        <!-- Use v-for for generate menus in v-navigation-drawer -->
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left dark color="orange">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">zaratedev</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <!-- Here see route -->
        <router-view />
      </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  name: 'App',
  computed: {
    menuItems () {
      let menuItems = [
        {icon: 'face', title: 'Sign up', link: '/singup'},
        {icon: 'lock_open', title: 'Sign in', link: '/singin'}
      ]

      if (this.userIsAuthenticated) {
        menuItems = [
          {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
          {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
          {icon: 'person', title: 'Profile', link: '/profile'}
        ]
      }
      return menuItems;
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>
