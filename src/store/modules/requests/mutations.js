export default {
    add_request(state, payload){
        state.requests.push(payload);
    },
    set_requests(state, payload){
        state.requests = payload;
    }
}