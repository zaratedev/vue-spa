import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/MeetupsComponent'
import CreateMeetup from '@/components/Meetup/CreateMeetupComponent'
import Profile from '@/components/User/ProfileComponent'
import Singin from '@/components/User/SinginComponent'
import Singup from '@/components/User/SingupComponent'
import Meetup from '@/components/Meetup/MeetupComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/singin',
      name: 'Singin',
      component: Singin
    },
    {
      path: '/singup',
      name: 'Singup',
      component: Singup
    }
  ],
  mode: 'history' // Delete in url the simboly /#/
})
