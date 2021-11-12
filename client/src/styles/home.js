import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    body: {
        overflow: 'hidden',
    },
    goaltitle: {
        background: '#e5e4e5',
        fontWeight: 'bolder',
    },
    heading: {
        marginTop: '15px',
        marginBottom: '10px',
        color: 'white'
    },
    goals: {
        background: '#black',
        overflow: "auto",
        maxHeight: 550,
        minHeight: 550,
        textAlign: 'center',
    },
}));