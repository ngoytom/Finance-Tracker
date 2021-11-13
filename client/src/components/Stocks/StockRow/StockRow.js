import React from 'react'
import TableCell from '@mui/material/TableCell';
import useStyles from "./styles.js"

function StockRow({ ticker, image, symbol, price, marketCap, priceChange }) {
    const classes = useStyles();
    
    return (
        <>  
            <TableCell component="th" scope="row">{ticker} <img className={classes.cryptoImage} src={image} alt="crypto"/></TableCell>
            <TableCell>{symbol}</TableCell>
            <TableCell>${price}</TableCell>
            {priceChange < 0 ? (<TableCell style={{ color: 'red' }}>{priceChange.toFixed(2)}%</TableCell>) : (<TableCell style={{ color: 'green' }}>{priceChange.toFixed(2)}%</TableCell>)}
            <TableCell>${marketCap.toLocaleString()}</TableCell>
        </>
    )
}

export default StockRow
