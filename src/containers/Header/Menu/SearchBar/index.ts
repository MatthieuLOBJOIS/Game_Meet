import { connect } from 'react-redux';

import SearchBar from '../../../../components/Header/Menu/SearchBar';
import { searchFriends } from '../../../../actions/friends';

const mapStateToProps = (state: any) => ({
	search: state.friends.search
});

const mapDispatchToProps = (dispatch: any) => ({
	searchFriends: (event: any): void => {
		//console.log(event.target.value);
		dispatch(searchFriends(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
