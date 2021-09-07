<template>
  <base-dialog :show="!!error" title="An error occured!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h1>Requests Recieved</h1>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests && !isLoading">
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
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        this.$store.dispatch('requests/fetch_requests');
      } catch (e) {
        this.error = e.message || 'Something went wrong.';
      }
      this.isLoading = false;
    },
    handleError(){
      this.error = null;
    },
  },
  computed: {
    recievedRequests() {
      return this.$store.getters['requests/requests'];
    },

    hasRequests() {
      return this.$store.getters['requests/has_requests'];
    },
  },
  created(){
    this.loadRequests();
  }
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