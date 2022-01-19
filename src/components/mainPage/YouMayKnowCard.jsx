import { Button, Card, CardMedia, Paper, Typography } from '@mui/material';
import React from 'react';

function YouMayKnowCard(props) {
    const data = props.data;
    console.log(data);
    return (
        <Card style={{display:"flex",width:"95%",boxShadow:"none",padding:"2.5%"}}>
            <CardMedia
                component="img"
                height="140"
                image={data.img}
                alt="iguana"
                style={{width:40,height:40,borderRadius:20,marginLeft:"4%",}}
            />
            <Paper style={{marginLeft:"4%",width:"50%",boxShadow:"none"}}>
            <Typography style={{textAlign:"left"}}>{data.name}</Typography>
            <Typography style={{textAlign:"left"}}>{data.title}</Typography>
            </Paper>
            
            <Button style={{color:"#5576A9",border:"1px solid #5576A9",margin:"auto",borderRadius:"10%"}}>Follow</Button>
        </Card>
    );
}

export default YouMayKnowCard;