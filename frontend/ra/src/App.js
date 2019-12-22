import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from 'react-redux'
import BaseRouter from "./routes";
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';

import CustomLayout from "./containers/Layouts";

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignup()
    }

    render() {
        return (
            <div>
              <Router>
                <CustomLayout {...this.props}>
                  <BaseRouter />
                </CustomLayout>
              </Router>
            </div>
          );
    }
} /*{...this.props is passing isAuthenticated to our layout*/

const mapStateToProps = state => { /*this way we dont define the state in App and get it from store. this is not mandatory*/
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => { /*checking if we're logged in*/
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
