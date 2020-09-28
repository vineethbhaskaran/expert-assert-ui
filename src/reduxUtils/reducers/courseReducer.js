import { FETCH_COURSES } from '../actions/type';

const initialState = {
  courses: [],
  course: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        ...state,
        courses: action.payload
      };
   
    default:
      return state;
  }
}
