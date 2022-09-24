// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from 'react';

import Card from '@mui/material/Card';
//import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import AddCircle from '@mui/icons-material/AddCircle';

import './styles/Contactform.css';

const ContactForm = ({handleClick}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const newContact = useState({
        name:"",
        phone:"",
        email:"",
        photo:"" 
    });

    const [contactName, setContactName ]= useState ('');
    const [contactPhone, setContactPhone ]= useState ('');
    const [contactEmail, setContactEmail ]= useState ('');
    const [contactPhoto, setContactPhoto ]= useState ('');

    return (
        <Card className="card-cf" variant="outlined" sx={{bgcolor:"cornsilk"}}>
            <TextField
                fullWidth
                required
                id="name"
                label="Name"
                placeholder="Name"
                sx={{ marginBottom: 2 }}
                variant="filled"
                value={contactName}
                onChange={(e) => setContactName(e.target.value) }
            >
            </TextField>
            <TextField
                fullWidth
                required
                id="phone"
                label="Phone"
                placeholder="Phone"
                sx={{ marginBottom: 2 }}
                variant="filled"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value) }
            >
            </TextField>
            <TextField
                fullWidth
                required
                id="email"
                label="Email"
                placeholder="Email"
                sx={{ marginBottom: 2 }}
                variant="filled"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value) }
            >
            </TextField>
            <TextField
                fullWidth
                required
                id="image"
                label="Photo URL"
                placeholder="Photo URL"
                sx={{ marginBottom: 2 }}
                variant="filled"
                value={contactPhoto}
                onChange={(e) => setContactPhoto(e.target.value) }
            >
            </TextField>
            <Button 
                color="success" 
                startIcon={ <AddCircle /> }
                onClick={ ()=> {
                    newContact.name= contactName;
                    newContact.phone= contactPhone;
                    newContact.email= contactEmail;
                    newContact.photo= contactPhoto;
                    handleClick(newContact);
                }}
            > Add New
            </Button>
        </Card>
    );
}

export default ContactForm;