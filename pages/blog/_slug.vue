<template>
  <div>
    <h1 v-if="post">{{post.title}}</h1>
    <p v-if="post">{{post.description}}</p>
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
  apollo: {
    post: {
      query: gql`
        query Post($slug: String!) {
          post(filter: { slug: { matches: { pattern: $slug } } }) {
            title
            description
          }
        }
      `,
      prefetch({ route }) {
        return {
          slug: route.params.slug
        };
      },
      variables() {
        return {
          slug: this.$route.params.slug
        };
      }
    }
  }
};
</script>
