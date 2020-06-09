//Imports of dependencies
import React, { FunctionComponent, useEffect } from 'react';
import { Input, InputLabel } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

//Local imports

import { Select, MenuItem, Chip, FormControl, FormHelperText } from '@material-ui/core';
import '../../../../../../style/index.css';
import { getStyles, useStyles } from './style';

type Props = {
	games: any;
	id: string;
	changeGames: any;
	getListGames: any;
	error: boolean;
	message: string;
};

const SelectField: FunctionComponent<Props> = ({ games, id, changeGames, getListGames, error, message }) => {
	const classes = useStyles();
	const theme = useTheme();
	const [ gameName, setGameName ] = React.useState<string[]>([]);
	const [ objectGames, setObjectGames ] = React.useState({});

	useEffect(() => {
		getListGames();
	}, []);

	useEffect(
		() => {
			const identifier = Object.values(objectGames)[1];
			changeGames(gameName, identifier);
		},
		[ gameName ]
	);

	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250
			}
		}
	};

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setGameName(event.target.value as string[]);
		setObjectGames(event.target);
	};

	return (
		<FormControl error={error} className={classes.formControl}>
			<InputLabel id="demo-mutiple-chip-label">Choisis tes jeux : </InputLabel>
			<Select
				className={classes.select}
				labelId="demo-mutiple-chip-label"
				name={id}
				id={id}
				multiple
				value={gameName}
				onChange={handleChange}
				input={<Input id="select-multiple-chip" />}
				renderValue={(selected) => (
					<div className={classes.chips}>
						{(selected as string[]).map((value) => (
							<Chip key={value} label={value} className={classes.chip} />
						))}
					</div>
				)}
				MenuProps={MenuProps}
			>
				{games.map((name: any) => (
					<MenuItem
						className="MuiListItem-root.Mui-selected"
						key={name.name}
						value={name.name}
						style={getStyles(name.name, gameName, theme)}
					>
						{name.name}
					</MenuItem>
				))}
			</Select>
			<FormHelperText>{message}</FormHelperText>
		</FormControl>
	);
};

export default SelectField;
