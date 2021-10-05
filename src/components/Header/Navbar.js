import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './style.css';

const Nav = () => {


    
    const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
        right: -3,
        top: 4,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    }));

    return (
           
           <div className="navbar">

                    <h3 ><span className="text-danger ">A</span>nivio</h3>
                
                    <aside className="nav-item">
                        <a href>Home<ArrowDropDownIcon/></a>
                        <a href>Shop<ArrowDropDownIcon/></a>
                        <a href>Blog<ArrowDropDownIcon/></a>
                        <a href>Pages<ArrowDropDownIcon/></a>
                        <a href>Elementor Live<ArrowDropDownIcon/></a>
                        <a href>Buy</a>
                    </aside>
                    
                    <aside className="nav-icon">
                        <span><SearchIcon /></span>
                       <span><AccountCircleIcon /></span>
                       <span><FavoriteBorderIcon /></span>
                       <span>
                                 <IconButton    IconButton aria-label="cart">
                                 <StyledBadge badgeContent={2} color="secondary">
                                <ShoppingCartIcon />
                                </StyledBadge>
                                </IconButton>
                       </span>
                    </aside>
            </div>
    );
};

export default Nav;