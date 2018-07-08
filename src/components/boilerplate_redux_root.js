import React from "react"
import { Provider } from "react-redux"
import {
  createStore,
  applyMiddleware,
  compose
} from "redux"
import thunkMiddleware from "redux-thunk"

import rootReducers from "reducers/root_reducers"

import BoilerplateContainer from "containers/boilerplate_container"

let store
let composeEnhancers

class BoilerplateReduxRoot extends React.Component{

  componentWillMount(){
    // setting dev tools up per question - until we redo the job_batch/job flow in react
    composeEnhancers =
      typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          name: "boilerplate"
        }) : compose

    const enhancer = composeEnhancers(
      applyMiddleware(thunkMiddleware)
    )

    let initialState = this.props

    store = createStore(rootReducers, initialState, enhancer)
  }

  render() {
    return(
      <Provider store={store}>
        <BoilerplateContainer />
      </Provider>
    )
  }

}

export default BoilerplateReduxRoot
