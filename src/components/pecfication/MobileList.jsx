import React from 'react'
import {ListItemButton,ListSubheader,ListItemText,ListItem,List} from '@mui/material'
import { Oppo,Vivo,Redmi,OnePlus,Apple } from './Brands';
import {useNavigate} from 'react-router-dom'
const MobileList = () => {
    const navigate = useNavigate()
    const brandNames = ['Oppo','Vivo','Redmi','Oneplus','Apple']
    const brand = [Oppo,Vivo,Redmi,OnePlus,Apple]

    const handleItem=(e)=>{
      navigate(`/product/${e}`)
    }

  return (
    <>
        <List
      sx={{
        width: '100%',
        padding:'10px',
        position: 'relative',
        overflow: 'auto',
        height: '88vh',
        color:'wheat',
        backgroundColor:'black',
        '& ul': { padding: 0 },
      }}
      subheader={<li/>}
    >
      {brandNames.map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader sx={{backgroundColor:'black',color:'white'}}>{`${sectionId}`}</ListSubheader>
            {brand[brandNames.indexOf(sectionId)].map((item) => (
              <ListItem key={`item-${sectionId} ${item}`}>
                <ListItemButton onClick={()=>{handleItem(item)}}>
                    <ListItemText>
                        {item}
                    </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
    </>
  )
}

export default MobileList