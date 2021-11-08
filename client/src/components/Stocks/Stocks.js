import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StockRow from "./StockRow/StockRow.js";
import axios from 'axios';

function Stocks() {
    const[coins, setCoins] = useState([])

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data)
        }).catch(error => console.log(error))
    }, []);

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase())

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Symbol</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Change</TableCell>
                <TableCell>Market Cap</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {filteredCoins.map(coin => {
                    return(
                        <TableRow>
                            <StockRow 
                                key={coin.id} 
                                ticker={coin.name} 
                                image={coin.image} 
                                symbol={coin.symbol} 
                                marketCap={coin.market_cap} 
                                price={coin.current_price}
                                priceChange={coin.price_change_percentage_24h} 
                            />
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
        </TableContainer>
    );
}

export default Stocks