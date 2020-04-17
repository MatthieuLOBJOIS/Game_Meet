import { connect } from 'react-redux';

import SelectField from '../../components/Fields/SelectField';
import { snapGame, getChooseGames } from '../../actions/games';

const mapStateToProps = (state: any) => ({
	games: state.games.listGames,
	chooseGames: state.games.chooseGames
});

const mapDispatchToProps = (dispatch: any) => ({
	getListGames: () => {
		dispatch(snapGame());
	},
	changeGames: (games: any) => {
		dispatch(getChooseGames(games));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectField);
