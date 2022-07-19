import { Grid } from "@mui/material";
import {useSelector} from 'react-redux'
import { Button } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import * as React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function Header({handelpage}) {
    
    const state = useSelector(state => state)


    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    const menubascket=state.filter(i=>i.count>0).map(item=>(item? <MenuItem onClick={handleClose}><div className='post'><h4>{item.title}:{item.count} عدد</h4></div></MenuItem>:<h4>محصولی وجود ندارد</h4>))
  
    return (
      
            <Grid container   justifyContent="center"alignItems="center">
                <Grid item xs={12} md={8}>
                    <div className='header' >

                    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <AddShoppingCartIcon/>
        bascket
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menubascket}
        
      </Menu>
      {state.filter(i=>i.count>0).length} 
    </div>
                        
                     





                      <div>
                       <Button onClick={()=>handelpage(true)} >CARD</Button>
                       <Button onClick={()=>handelpage(false)} >HOME</Button>
                      </div>
                      
                    </div>
                </Grid>

            </Grid>
        
    )
}
