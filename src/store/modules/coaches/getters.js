
export default {
    coaches_getter(state) {
        return state.coaches;
    },
    has_coaches(state){
        return state.coaches && state.coaches.length > 0;
    },
    is_coach(_, getters, _2, rootGetters){
        const coaches = getters.coaches_getter;
        const userId = rootGetters.user_id_getter;
        return coaches.some(coach => coach.id === userId);
    }
};