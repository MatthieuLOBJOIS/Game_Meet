import { connect } from 'react-redux';

import SelectField from '../../components/Fields/SelectField';
import { snapGame } from '../../actions/games';

const mapStateToProps = (state: any) => ({
	games: state.games.listGames
});

const mapDispatchToProps = (dispatch: any) => ({
	getListGames: () => {
		dispatch(snapGame());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectField);
