import { connect } from 'react-redux';

import SimpleField from '../../components/Fields/SimpleField';
import { changeField } from '../../actions/user';

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
	changeField: (event: any) => {
		let newValue = event.target.value;
		let identifier = event.target.id;
		//console.log(newValue, identifier);
		dispatch(changeField(newValue, identifier));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleField);
