import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    menuIcon: {
        marginTop: '50px',
        marginLeft: '-20px',
        fontSize: '30px !important',
    },
    closeIcon: {
        fontSize: '30px !important',
        marginTop: '10px',
        marginLeft: '-5px',
        color: 'black'
    },
    menuBars: {
        marginLeft: '50px',
        marginTop: '-50px',
        fontSize: '2rem',
        background: 'none',
        color: 'black'
    },
    overlay: {
        position: 'absolute',   
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',   
        background: '#939598',
        opacity: '.5',
    },
    default: {
        background: 'white',
    }
    

}));