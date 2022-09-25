import './App.css';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [ contacts, setContacts ] = useState(contactsJSON);

  //useEffect(()=>{
  //  setContacts(contactsJSON);
  //},[]);
  
  const handleClick = (newContact) => {
    setContacts([...contacts, newContact])
  };

  //console.log(contacts);

  return (
    <>
      <div className="App">
        <Header/>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <ContactForm handleClick={handleClick}/>
          </Grid>
          <Grid item xs={6}>
            {
              contacts.map((item, index) => { 
                let obj = {
                  name:item.name,
                  phone:item.phone,
                  email:item.email,
                  photo:item.photo
                };
                return <Contact key={index} data={ obj }> </Contact>
              })
            }
          </Grid>
        </Grid> 
      </div>
    </>
  );
};

export default App;
