import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    body: {
        overflow: 'hidden',
    },
    goaltitle: {
        background: '#e5e4e5',
        fontWeight: 'bolder',
    },
    goals: {
        background: '#f4f3f4',
        overflow: "auto",
        maxHeight: 550,
        textAlign: 'center',
    },

}));