<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <li v-for="(post, index) in allPosts" :key="index">
          <nuxt-link :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
        </li>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import gql from 'graphql-tag';

export default {
  apollo: {
    allPosts: gql`
      {
        allPosts {
          title
          description
          slug
        }
      }
    `
  },
  components: {}
};
</script>
