/*
  Be sure to import in all of the action types from `../actions`
*/
import { GET_SMURFS, GETTING_SMURFS, CREATE_SMURF, CREATING_SMURF, UPDATE_SMURFS, UPDATING_SMURF, DELETE_SMURF, DELETING_SMURF, ERROR } from '../actions';
const initialstate = {
  smurfs: [],
  loading: false,
  error: null,

}
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

export const main_reducer = (state = initialstate, action) => {
  switch(action.type){
    case GET_SMURFS:
    return {
      ...state, 
      smurfs: action.payload,
    }
    case GETTING_SMURFS:
    return {
      ...state,
      loading:true,
    }
    case ERROR:
    return {
      ...state,
      error: action.payload,
    }
    default:return state;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
