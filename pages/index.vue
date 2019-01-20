<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <li v-for="(post, index) in allPosts" :key="index">{{ post.title }}</li>
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
        }
      }
    `
  },
  components: {}
};
</script>
