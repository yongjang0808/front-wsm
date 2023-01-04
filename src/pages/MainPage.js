import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import PostList from '../components/post/PostList';
import AreaList from '../area/AreaList';
import SearchBar from '../components/common/UI/searchBar';
import SearchIcon from '@mui/icons-material/Search';
const post = {
    title: '우리끼리',
    description:
      "나눔 WON해",
    image: process.env.PUBLIC_URL + "/assets/images/MainPage/banner/IU.png",
    imageText: 'main image description',
    maxWidth: '100%',
    
  };


  

const MainPage = () => {

  return (
    <main>
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 1,
        pb: 6,
      }}
    >
    <Container maxWidth="xl">
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: '#03a9f4',
          color: '#fff',
          mb: 1,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '20%',
          backgroundImage: `url(${post.image})`,
        }}
      >
         
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container columns={{ xs: 2, sm: 3, md: 8 }}>
          <Grid item md={4} xs={1} sm={1}container >
            <Box md={4} xs={1} sm={1}
              sx={{
                position: 'relative',
                p: { xs: 1, md: 4 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
              <Link variant="subtitle1" href="#">
                {post.linkText}
              </Link>
            </Box>
          </Grid>
          <Grid item md={4} xs={1} sm={1} container >
            <Box 
              sx={{
                position: 'relative',
                // p: { xs: 1, md: 3 },
                // pr: { md:0},
              }}
            >
              <SearchBar ></SearchBar> 
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
    </Box>
    <Container>
    <Typography variant='h4' color="blue" fontWeight={'bold'}>
      지역별 마켓 둘러보기
    </Typography>
    </Container>
    < Container maxWidth='lg' sx={{py:8}}>
      <Box sx={{height:'10%'}}>
      <AreaList></AreaList>
      </Box>
    </Container>
    </main>
  );
}

export default MainPage;