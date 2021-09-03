export default {
  register_coach_action(context, data) {
    const coachData = {
      id: context.rootGetters.user_id_getter,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    context.commit('register_coach', coachData);
  }
};
