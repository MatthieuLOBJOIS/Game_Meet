//Imports of dependencies
import React, { FunctionComponent } from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
	label: string;
	changeMessage: any;
	message: string;
};

const ChatField: FunctionComponent<Props> = ({ label, changeMessage, message }) => {
	return (
		<TextField
			onChange={changeMessage}
			value={message}
			id="outlined-full-width"
			label={`à ${label}`}
			style={{ margin: 8, width: '80vw' }}
			placeholder="Discussion"
			fullWidth
			margin="normal"
			InputLabelProps={{
				shrink: true
			}}
			variant="outlined"
		/>
	);
};

export default ChatField;
