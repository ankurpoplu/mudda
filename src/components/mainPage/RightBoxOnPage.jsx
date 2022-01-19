import { Button, Card, CardActions, Grid, Typography } from '@mui/material';
import React from 'react';

function RightBoxOnPage(props) {
    return (
        <Grid style={{marginRight:"4%",marginTop:"2%",width:"27%",marginLeft:"2%"}}>
            <Card sx={{ maxWidth: 345 }} style={{marginTop:"5%"}}>
                <Grid style={{display:"flex"}}>
                <Typography style={{textAlign:"left",fontSize:"12px",padding:"10px",width:"50%"}} variant='h6'>MY GROUPS</Typography>
                <Typography style={{textAlign:"center",fontSize:"12px",padding:"10px",width:"40%",color:"#1D498D"}}>+ ADD NEW</Typography>
                </Grid>
                <Card>

                </Card>
                <CardActions style={{borderTop:"1px solid #dadada"}}>
                    <Button style={{margin:"auto"}} size="small">See All</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default RightBoxOnPage;