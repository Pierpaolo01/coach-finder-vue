<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" >Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firsName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        />
      </ul>
      <h3 v-else>No Coaches Found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
  name: 'CoachesList',
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      console.log(this.$store.getters.coaches_getter);
      return this.$store.getters['coaches/coaches_getter'];
    },

    hasCoaches() {
      return this.$store.getters['coaches/has_coaches'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>