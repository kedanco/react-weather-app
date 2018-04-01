import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
      // Only update state using setState -> same theory for redux
      // concat returns new instance of state compared to push
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state]; //[ city, city, city]
  }

  return state;

}
