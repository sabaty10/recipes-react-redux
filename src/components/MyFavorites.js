import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteRecipe from './FavoriteRecipe.js'
import Button from '@material-ui/core/Button';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';




const MyFavorites = () => {
    const list = useSelector(state => state.likesList.likes);
    const [activeSideBar, setActiveSideBar] = useState(false)


    const displayFavorites = () => {
        setActiveSideBar(!activeSideBar)
    }

    return (

        <div className="my-favorite-button">
            <Button
                variant="contained"
                color="primary"
                className="favorites-button"
                onClick={displayFavorites}
                startIcon={<BookmarkBorderIcon />}
            >
                <label>My Favorites</label>
            </Button>
            <div className={` ${activeSideBar ? 'sidebar-active' : ''}`}>
                {activeSideBar && <button className="close-button" onClick={() => setActiveSideBar(!activeSideBar)}><i class="close icon"></i></button>}
                {activeSideBar && <div>
                    <ol>{list.map((recipe) => <FavoriteRecipe recipe={recipe} />)}</ol>
                </div>}
            </div>
        </div >
    )
}

export default MyFavorites

