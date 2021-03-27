import { createStore } from 'redux'
import travelReducer from './reducers'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  travelInfo : travelReducer,
  form: formReducer
})
export const store = createStore(rootReducer)