import { connect } from 'react-redux';

import SelectField from '../../components/Fields/SelectField';
import { getUrlPictureGames } from '../../actions/games';
import { validateChangeField } from '../../actions/register';

const mapStateToProps = (state: any) => ({
	games: state.games.listGames,
	chooseGames: state.games.chooseGames
});

const mapDispatchToProps = (dispatch: any) => ({
	changeGames: (games: any, identifier: string) => {
		if (identifier !== undefined) {
			dispatch(validateChangeField(games, identifier));
			//console.log(games, 'selectcontainers');
			dispatch(getUrlPictureGames(games));
		}
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectField);
