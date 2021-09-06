<template>
  <section>
    <base-card>
      <header>
        <h1>Requests Recieved</h1>
      </header>
      <ul v-if="hasRequests">
        <request-items
          v-for="req in recievedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        />
      </ul>
      <h3 v-else>You have no requests recieved yet.</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItems from '../../components/requests/RequestItem.vue';
export default {
  components: {
    RequestItems,
  },
  computed: {
    recievedRequests() {
      console.log(this.$store.getters['requests/requests']);
      return this.$store.getters['requests/requests'];
    },

    hasRequests() {
      return this.$store.getters['requests/has_requests'];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>