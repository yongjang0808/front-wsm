import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { borderRadius, maxWidth } from '@mui/system';
import { cities } from '../constant/locale';
import { Link as RouterLink } from 'react-router-dom';
import "./CardArea.css";
const AreaList = () => {

    return (
        <Grid container spacingspacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 3, md: 15 }}  >
            {cities.map((city, index) => (
              <Grid  component={RouterLink} to="/posts" item key={index} xs={1} sm={1} md={3}>
                <Card className='styleCard'
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column',spacing:5}}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      height: 230,
                    }}
                    image= {city.img}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" textAlign="center" fontWeight="bold">
                    {city.label}
                    </Typography>
                    {/* <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography> */}
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
        </Grid>            
    );
};

export default AreaList;