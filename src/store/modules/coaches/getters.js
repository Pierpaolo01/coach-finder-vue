
export default {
    coaches_getter(state) {
        console.log(state.coaches)
        return state.coaches;
    },
    hasCoaches(state){
        return state.coaches && state.coaches.length > 0;
    }
} 