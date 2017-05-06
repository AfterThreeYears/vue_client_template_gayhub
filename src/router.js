import Vue from 'vue';
import Router from 'vue-router';
import Note from './component/Note.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    base: process.env.NODE_ENV === 'production' ? '/vinci/' : '/',
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Note,
      },
    ],
  });
}
