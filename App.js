import React from 'react';
import {View, Text} from 'react-native';
import Navigator from './src/Navigator';
import {connect, useDispatch} from 'react-redux';

import {getUserDetails} from './src/Store/reduxSelectors';
import {getUserInfo} from './src/Store/Actions/Auth';

import {getAuthToken} from './src/Utils/getAuthToken';
import CustomModal from './src/Components/Common/Modal';
import {handleModal} from './src/Store/Actions/Global';
import CustomLoader from './src/Components/Common/CustomLoader';

const App = ({userInfo}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();
  React.useEffect(() => {
    _componentDidMount();
  }, []);
  const _componentDidMount = async () => {
    let isLoggedIn = await getAuthToken();
    if (isLoggedIn) {
      dispatch(handleModal({isVisible: true, component: <CustomLoader />}));
      await dispatch(getUserInfo());
      dispatch(handleModal({isVisible: false, component: <React.Fragment />}));
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <Navigator userInfo={userInfo} />
      <CustomModal />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: getUserDetails(state),
  };
};
export default connect(mapStateToProps, null)(App);
