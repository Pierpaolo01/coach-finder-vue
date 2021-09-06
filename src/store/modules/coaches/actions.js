export default {
  async register_coach_action(context, data) {
    const userId = context.rootGetters.user_id_getter;
    const coachData = {
      id: userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(
      `https://vue-coaches-app-8b3dc-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );
    // const resData = await response.json();
    if (!response.ok) {
      //error
    }
    context.commit('register_coach', {
      ...coachData,
      id: userId
    });
  },
  async load_coaches(context){
    const response = await fetch(`https://vue-coaches-app-8b3dc-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`);
    const resData = await response.json();

    if(!response.ok){
      //error
    }
    
    const coaches = [];

    for (const key in resData){
      const coachData = {
        id: key,
        firstName: resData[key].firstName,
        lastName: resData[key].lastName,
        description: resData[key].description,
        hourlyRate: resData[key].hourlyRate,
        areas: resData[key].areas
      };
      coaches.push(coachData);
    }

    context.commit('set_coaches', coaches);
  }
};
