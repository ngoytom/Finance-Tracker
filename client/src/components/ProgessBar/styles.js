import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  list: {
    maxHeight: '500px',
    overflow: 'auto',
  },
  budgetMax: {
    transition: '850ms ease-in',
  },
  budgetText: {
      marginLeft: '3px',
      marginRight: '3px',
      marginTop: '10px'
  },
  adjustBudget: {
      minHeight: '40px',
      maxHeight: '40px',
      minWidth: '30px',
      maxWidth: '30px',
      paddingRight: '25px',
      marginTop: '10px',
  }

}));