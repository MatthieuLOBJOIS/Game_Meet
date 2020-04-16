//Imports of dependencies
import React, { FunctionComponent, useEffect } from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import { Input, InputLabel } from '@material-ui/core';

//Local imports

import { Select, MenuItem, Chip, FormControl } from '@material-ui/core';
import '../../style/index.css';

type Props = {
	getListGames: any;
	games: any;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
			maxWidth: 300
		},
		chips: {
			display: 'flex',
			flexWrap: 'wrap'
		},
		chip: {
			margin: 2
		},
		select: {
			width: 200
		}
	})
);

const SelectField: FunctionComponent<Props> = ({ getListGames, games }) => {
	const classes = useStyles();
	const theme = useTheme();
	useEffect(() => {
		getListGames();
	}, []);
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

	function getStyles(name: string, gameName: string[], theme: Theme) {
		return {
			fontWeight:
				gameName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
		};
	}

	const [ gameName, setGameName ] = React.useState<string[]>([]);

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setGameName(event.target.value as string[]);
	};

	return (
		<FormControl className={classes.formControl}>
			<InputLabel id="demo-mutiple-chip-label">Choisi tes jeux : </InputLabel>
			<Select
				className={classes.select}
				labelId="demo-mutiple-chip-label"
				id="demo-mutiple-chip"
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
						key={name}
						value={name}
						style={getStyles(name, gameName, theme)}
					>
						{name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SelectField;
