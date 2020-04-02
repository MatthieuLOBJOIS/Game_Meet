import { connect } from 'react-redux';

import Form from '../components/Form';

const mapStateToProps = (state: any) => ({
    login: state.login.name,
});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
