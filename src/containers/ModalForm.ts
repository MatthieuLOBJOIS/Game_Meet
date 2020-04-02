import { connect } from 'react-redux';

import ModalForm from '../components/ModalForm';

const mapStateToProps = (state: any) => ({
    login: state.login.name,
});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalForm);
