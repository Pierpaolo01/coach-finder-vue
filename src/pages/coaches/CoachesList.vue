<template>
<base-dialog :show="!!error" title="An error occured!" @close="handleError">
<p> {{error}} </p>
</base-dialog>
  <coach-filter @change-filter="setFilters" />
  <section>
    <base-card>
      <div class="controls">
        <base-button @click="loadCoaches(true)" mode="outline">Refresh</base-button>
        <base-button v-if="!isCoach && !isLoading" link to="/register">Register as Coach</base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner />
      </div>

      <ul v-else-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
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
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  name: 'CoachesList',
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
      isLoading: false,
      error: null,
    };
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false){
      this.isLoading = true;
      try{
        await this.$store.dispatch('coaches/load_coaches', {forceRefresh: refresh});
      }catch(e){
        this.error = e.message || 'something went wrong!'; 
      }
      this.isLoading = false;
    },
    handleError(){
      this.error = null;
    },
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches_getter'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },

    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/has_coaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/is_coach'];
    },
  },
  created(){
    this.loadCoaches();
  }
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