import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    budgetSummary: {
        marginLeft: '60px',
        marginRight: '80px',
        marginTop: '50%',
        minHeight: '200px'
    },
    title: {
        textAlign: 'center'
    },
    budgetDetails: {
        paddingTop: '15px'
    },
    spending: {
        color: 'red',
        float: 'right',
        fontWeight: 'bold'
    },
    income: {
        color: 'green',
        float: 'right',
        fontWeight: 'bold'
    },
    divider: {
        marginTop: '8px',
        marginBottom: '8px',
        paddingTop: '3px',
        paddingBottom: '3px'
    }
    
}));