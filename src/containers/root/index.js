import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import firebase from '../../config/apiConfig';
import {
  setUser,
} from '../../actions';

import {
  loggedIn,
} from '../../selectors';

import Navigation from '../../components/navigation';
import LoadingContainer from '../loading';

class RootContainer extends React.Component {

  UNSAFE_componentWillMount(){
    console.log('<<<<------- Book Hogs Started ------>>>>')
    const { setUser } = this.props;
    setUser()
    firebase.auth().onAuthStateChanged((user) => { 
      if(user){
        // if user is logged in
      } else {
        setTimeout(() => {
          setUser({user: '123', uid: '21231243asfa12'})

        }, 3000);
      }
    })
  }

  render() {
    const { store } = this.props;
    console.log('state', store);
    return (
      loggedIn(store) ? <Navigation /> : <LoadingContainer />
    );
  }
}

RootContainer.propTypes = {
  setUser: PropTypes.func,
  state: PropTypes.array,
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { 
    setUser,
  }
)(RootContainer);
