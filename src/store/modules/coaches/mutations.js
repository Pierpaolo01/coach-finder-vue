
export default {
register_coach(state, payload){
    state.coaches.push(payload);
},
set_coaches(state, payload){
    state.coaches = payload;
},
set_fetch_timestamp(state){
    state.lastFetch = new Date().getTime();
}
}