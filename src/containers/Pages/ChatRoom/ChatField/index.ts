import { connect } from 'react-redux';

import ChatField from '../../../../components/Pages/ChatRoom/ChatField';
import { changeMessage } from '../../../../actions/messages';

const mapStateToProps = (state: any) => ({
	message: state.messages.message
});

const mapDispatchToProps = (dispatch: any) => ({
	changeMessage: (event: any) => {
		return dispatch(changeMessage(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatField);
