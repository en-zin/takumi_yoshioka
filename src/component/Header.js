import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import Logo from '../img/takumi_yoshioka_logo.png';
import '../css/header.css';

const options = [
    <Link to='/' className="nav_menu">Home</Link>,
    <Link to='/Profile' className="nav_menu">Who are you</Link>,
    <Link to='/About' className="nav_menu">About</Link>,
    <Link to='/Skill' className="nav_menu">Skill</Link>,
];

  
const ITEM_HEIGHT = 48;


const Header = () => {

    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <header>
            <div>
                <img src={Logo} alt="吉岡拓実のロゴ" className="header_logo"/>
            </div>
            <div className="tab_pc_hidden">
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        backgroundColor: "#707070",
                    },
                    }}
                >
                    {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                    ))}
                </Menu>
            </div>
        </header>
    )
}

export default Header;