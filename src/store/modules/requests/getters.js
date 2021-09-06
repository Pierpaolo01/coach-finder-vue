export default {
    requests(state){
        return state.requests;
    },
    has_requests(state){
        return state.requests && state.requests.length > 0;
    }
}