import React from "react"
import { Provider } from "react-redux"
import {
  createStore,
  applyMiddleware,
  compose
} from "redux"
import thunkMiddleware from "redux-thunk"

import rootReducers from "reducers/root_reducers"

import Article13Container from "containers/article13_container"

let store
let composeEnhancers

class Article13ReduxRoot extends React.Component{

  componentWillMount(){
    // setting dev tools up per question - until we redo the job_batch/job flow in react
    composeEnhancers =
      typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          name: "article13"
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
        <Article13Container />
      </Provider>
    )
  }

}

export default Article13ReduxRoot
