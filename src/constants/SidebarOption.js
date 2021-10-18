import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export const SidebarOption = [
    {
        title: "Home",
        path: "/",
        icon: <HomeIcon />,
        cName: "sidebar-option"
    },
    {
        title: "Budget Tracker",
        path: "/budget",
        icon: <AccountBalanceIcon />,
        cName: "sidebar-option"
    },
    {
        title: "Transactions",
        path: "/transactions",
        icon: <TrendingUpIcon />,
        cName: "sidebar-option"
    },
]
