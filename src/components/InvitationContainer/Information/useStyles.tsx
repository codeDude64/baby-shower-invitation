import { makeStyles } from '../../../layouts/theme';

const useStyles = makeStyles({ name: 'Information' })((theme) => ({
  container: {
    textAlign: 'center',
    color: theme.pallete.primaryColor,
    borderRadius: 20,
    minWidth: 275,
  },
  title: {
    fontFamily: 'Fredoka One',
    fontSize: 25,
  },
  desc: {
    fontFamily: 'Lato',
  },
}));

export default useStyles;
