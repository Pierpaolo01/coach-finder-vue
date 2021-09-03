<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"/>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data){
      this.$store.dispatch('coaches/register_coach_action', data);
      this.$router.replace('/coaches');
    }
  },

};
</script>

<style>
</style>