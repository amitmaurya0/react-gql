
export const jobs = (state = { jobs:[], errors:null, loading: true }, action)  => {
   
  switch (action.type) {
      case 'GET_JOBS':
          return state={
                        ...state,
                        loading: true
                      };
      break;
      case 'ALL_JOBS':
          return state = {
              jobs: action.payload,
              loading: false
          };
      break;
      default:
          return state;
  }
};

