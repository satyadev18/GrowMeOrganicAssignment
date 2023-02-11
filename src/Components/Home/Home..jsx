import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button,Typography,Card,Grid, TextField,CardContent } from '@mui/material';

const Home = () => {


    const navigate = useNavigate();
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const [uName, setUName] = useState()
    const [data,setData] = useState([]);

    // handle submit

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await setData([uName,email,mobile]);
        navigate('/post');
    }

 //saving on localStorage

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(data));
    },[data])

 return (
<>

<div className="App">
      <Typography gutterBottom variant="h3" align="center">
        Registeration Form
       </Typography>
      <Grid>
        <Card align='center' style={{ maxWidth: 450, padding: "20px 5px", margin: "30px 40px"}}>
            <CardContent>

            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField placeholder="Enter your name" label="User Name" variant="outlined" fullWidth required onChange={(e)=>setUName(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required onChange={(e)=>setEmail(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required onChange={(e)=>setMobile(e.target.value)}/>
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit}>Submit</Button>
                </Grid>

              </Grid>
            </form>
     </CardContent>
        </Card>
      </Grid>
    </div>
</>

    )
}

export default Home