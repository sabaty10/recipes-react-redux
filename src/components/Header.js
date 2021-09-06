import React, { useState } from 'react';
import DateData from './DateData';
import MyFavorites from './MyFavorites';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

import { setSearch, setQuery } from '../actions';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../images/logo2.png';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
            main: "#2196f3"
        },
        secondary: {
            main: "#ffebee"
        }
    }
})

const useStyles = makeStyles((theme) => ({
    form: {
    },
    logo: {
        flexGrow: 0.6,

    },

    textColor: {
        color: "pink"
    }
}));

export const Header = () => {
    const classes = useStyles();
    const search = useSelector(state => state.search.search)
    const [isEmpty, setIsEmpty] = useState(false)
    const dispatch = useDispatch();

    const getSearch = (e) => {
        e.preventDefault();

        if (search !== '') {
            dispatch(setQuery(search))
            setIsEmpty(false)
        } else {
            setIsEmpty(true)
        }
    }

    return (
        <AppBar position="fixed">
            <Toolbar >
                <Link to='/'>
                    <img className="logo" src={logo}></img>
                </Link>
                <MyFavorites />
                <ThemeProvider theme={theme}>
                    <Typography className={classes.form} >
                        <div className="search-box">
                            <form autoComplete="off" onSubmit={getSearch} className={classes.toolBar}>
                                <TextField
                                    className="search-box"
                                    id="outlined-basic" label="Search" type="search" variant="outlined"
                                    error={isEmpty}
                                    size="small"
                                    value={search}
                                    color="secondary"
                                    onChange={e => dispatch(setSearch(e.target.value))}
                                />
                                <Button
                                    size="medium"
                                    color="primary"
                                    type="submit"
                                    variant="contained"
                                    className="button-search"
                                    endIcon={<SearchIcon />}
                                >
                                    Search
                                </Button>
                            </form>
                        </div>
                    </Typography>
                </ThemeProvider>
                <Typography >
                    <DateData />
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;