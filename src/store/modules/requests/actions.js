export default {
    contact_coach(context, payload){
        const newRequest = {
            id: new Date().toISOString,
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message,
        };
        context.commit('add_request', newRequest);
    }
}