import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function Profile({user}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div>
       <Typography  textAlign="center" onClick={handleClick}>Profile</Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {
            user ?
            <>
                <Typography sx={{ p: 2 }}>Name:{user.token.username}</Typography>
                <Typography sx={{ p: 2 }}>Email:{user.token.email}</Typography>
                <Typography sx={{ p: 2 }}>userId:{user.token.id}</Typography>
            </>
            :
            <>
                 <Typography sx={{ p: 2 }}>Please login your account</Typography>
            </>
        }
      </Popover>
    </div>
  );
}
