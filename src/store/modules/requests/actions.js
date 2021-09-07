export default {
  async contact_coach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(
      `https://vue-coaches-app-8b3dc-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );
    const resData = await response.json();
    if (!response.ok) {
      throw new Error(resData.message || 'Failed to send a request.');
    }

    newRequest.id = resData.name;
    newRequest.coachId = payload.coachId;

    context.commit('add_request', newRequest);
  },

  async fetch_requests(context) {
    const coachId = context.rootGetters.user_id_getter;
    const response = await fetch(
      `https://vue-coaches-app-8b3dc-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`
    );
    const resData = await response.json();

    if (!response.ok) {
      throw new Error(resData.message || 'Failed to fetch requests.');
    }

    const requests = [];

    for (const key in resData) {
      const req = {
        id: key,
        coachId: coachId,
        userEmail: resData[key].userEmail,
        message: resData[key].message
      };
      requests.push(req);
    }
    context.commit('set_requests', requests);
  }
};
