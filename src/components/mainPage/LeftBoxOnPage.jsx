import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import YouMayKnowCard from './YouMayKnowCard';
import YouMAYKnow from './YouMAYKnow.json';

function LeftBoxOnPage(props) {
    const textData = ["Government","Business","Politics","Education","Petrol","Travel","Pollution","Schools","Environment"]
    return (
        <Grid style={{marginLeft:"7%",marginTop:"3%",width:"27%"}}>
            <Card sx={{ maxWidth: 345 }}>
                <Box style={{width:"100%",height:100,backgroundImage:"url("+"https://media.istockphoto.com/photos/the-gray-and-silver-are-light-black-with-white-the-gradient-is-the-picture-id1202736228?b=1&k=20&m=1202736228&s=170667a&w=0&h=56xddYULx2WbMGp8Bnaw_py9S18WLMZRDj_CJLw2aGM="+")",}}></Box>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdLr50nm6KsHV-Iv_VMlvqGoNRJHb5LpTbA&usqp=CAU"
                    alt="green iguana"
                    style={{width:100,height:100,borderRadius:50,marginLeft:125,marginTop:-50}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Narinder Modi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Freelancer UX/UI designer, 80+ projects
                        in web design, mobile apps (iOS & android) and creative
                        projects. Open to offers.
                    </Typography>
                </CardContent>
                <Box style={{display:"flex",}}>
                    <Card style={{width:"35%",marginLeft:"5%",boxShadow:"none",backgroundColor:"#f7f7f7",padding:"5%"}}>
                        <Typography>Followers</Typography>
                        <Typography>523</Typography>
                    </Card>
                    <Card style={{width:"35%",boxShadow:"none",backgroundColor:"#f7f7f7",padding:"5%"}}>
                        <Typography>Following</Typography>
                        <Typography>310</Typography>
                    </Card>
                </Box>
                <CardActions>
                    <Button style={{margin:"auto"}} size="small">Manage Profile</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} style={{marginTop:"5%"}}>
                <Typography style={{textAlign:"left",fontSize:"12px",padding:"10px"}} variant='h6'>PEOPLE YOU MAY KNOW</Typography>
                {YouMAYKnow.map(e=>(<YouMayKnowCard data={e}/>))}
                <CardActions style={{borderTop:"1px solid #dadada"}}>
                    <Button style={{margin:"auto"}} size="small">See All</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} style={{marginTop:"5%"}}>
                <Typography style={{textAlign:"left",fontSize:"12px",padding:"10px"}} variant='h6'>POPULAR TAGS</Typography>
                <Grid style={{width:"90%",margin:"auto",marginBottom:"2%"}} container spacing={2}>
                    {textData.map(e=>(
                        <Typography style={{fontSize:"12px",padding:"2%",backgroundColor:"#E9F0F8",marginLeft:"8%",marginTop:"2%",marginBottom:"2%"}}>
                            {e}
                            </Typography>
                    ))}

                </Grid>
                <CardActions style={{borderTop:"1px solid #dadada"}}>
                    <Button style={{margin:"auto"}} size="small">See All</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default LeftBoxOnPage;