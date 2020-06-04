// * TODO: Implement function for updating user's step data in store
// * TODO: Function for getting user's step data may need some adjustments
module.exports = function stepService(store) {
    const service = {};
  
    service.getAll = () => store;

    service.get = (username) => {
      console.log(username);
      console.log(store[username]);
      return JSON.stringify(store[username]);
      //store[`"${username.valueOf()}"`]
    };
  
    service.add = (username, ts, newSteps) => {      
      store[`${username}`] = {
        ts,
        cumulativeSteps: newSteps
      };
      // Assume that `store` is initially an empty object {}. An example `store` is:
      // {
      //   jenna: {
      //     ts: 1503256778463,
      //     cumulativeSteps: 12323,
      //   },
      //   james: {
      //     ts: 1503256824767,
      //     cumulativeSteps: 587,
      //   },
      // }
  
    };
  
    return service;
  };
  