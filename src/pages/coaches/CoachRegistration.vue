<template>
<base-dialog :show="!!error" title="An error occured!" @close="handleError">
<p> {{error}} </p>
</base-dialog>
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
  data(){
    return{
      error: null,
    }
  },
  methods: {
    saveData(data){
      try{
        this.$store.dispatch('coaches/register_coach_action', data);
      } catch(e){
        this.error = e.message || 'An error occured when registering as a coach.'
      }
      this.$router.replace('/coaches');
    }
  },

};
</script>

<style>
</style>