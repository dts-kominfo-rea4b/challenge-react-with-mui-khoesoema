// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import './styles/Contact.css';
//import contactsData from '../data/contacts.json';
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  //const [ arrContact, setArrContact ]= useState([]);
  //
  //useEffect(() => {
  //  setArrContact(data);
  //}, []);
  
  return (
      <List className="list">
      { Object.values(data).map( (item,index) => {
        return (
        <div key={index}>
          <ListItem >
          <ListItemAvatar>
            <Avatar
              alt={item.name} 
              src={item.photo}
              sx={{ width: 56, height: 56, marginRight: 2}}
            >
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={item.name}
            secondary={ 
              <React.Fragment>
                <Typography>{item.phone}</Typography> 
                <Typography>{item.email}</Typography>
              </React.Fragment>            
            }
            />
          </ListItem>
          <Divider component="li" />
        </div>
      )})}
      {/*<ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Monica" 
            src="http://placekitten.com/500"
            sx={{ width: 56, height: 56, marginRight: 2}}
          >
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
          primary="Monica" 
          secondary={ 
            <React.Fragment>
              <div>0853 6765 3673</div> 
              <div>monica@email.com</div>
            </React.Fragment>            
          }
          />
      </ListItem>
        <Divider component="li" />*/}
    </List>
  );
};

export default Contact;
