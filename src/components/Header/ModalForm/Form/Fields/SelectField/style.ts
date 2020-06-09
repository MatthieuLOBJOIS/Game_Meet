import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
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

export const getStyles = (name: string, gameName: string[], theme: Theme) => {
	return {
		fontWeight:
			gameName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
	};
};
