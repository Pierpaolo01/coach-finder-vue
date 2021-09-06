export default {
    requests(state, _, _2, rootGetters){
        const coachId = rootGetters.user_id_getter;

        return state.requests.filter(req => req.coachId === coachId);
    },
    has_requests(_, getters){
        return getters.requests && getters.requests.length > 0;
    }
}