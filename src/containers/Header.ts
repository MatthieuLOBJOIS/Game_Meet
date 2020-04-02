import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = (state: any) => ({
    login: state.login.name,
});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
