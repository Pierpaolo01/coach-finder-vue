
export default {
    coaches_getter(state) {
        return state.coaches;
    },
    has_coaches(state){
        return state.coaches && state.coaches.length > 0;
    }
};