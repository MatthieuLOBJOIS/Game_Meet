import { connect } from 'react-redux';

import SelectField from '../../components/Fields/SelectField';
import { snapGame, getChooseGames } from '../../actions/games';
import { validateChangeField } from '../../actions/register';

const mapStateToProps = (state: any) => ({
	games: state.games.listGames,
	chooseGames: state.games.chooseGames
});

const mapDispatchToProps = (dispatch: any) => ({
	getListGames: () => {
		dispatch(snapGame());
	},
	changeGames: (games: any, identifier: string) => {
		dispatch(getChooseGames(games));
		dispatch(validateChangeField(games, identifier));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectField);
