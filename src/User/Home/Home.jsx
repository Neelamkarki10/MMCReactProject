import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { baseUrl } from '../../Globals/Config';
import { Box, CircularProgress } from '@mui/material';
import Blog from '../Blog/Blog';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate= useNavigate();
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getBlogs = async() => {
    let res = await axios.get(`${baseUrl}Blog`);
    setBlogs(res.data);
    // setLoading(false); 
    setTimeout(()=>{
      setLoading(false);
    },500);
  };
  React.useEffect(()=>{
    getBlogs();
  },[]);
  return (
    <Box sx={{ width: "80%", margin: "0 auto"}}>
      <Typography variant="h3" sx={{ my: 3, textAlign: "center"}}>
        Blogs
      </Typography>
      {loading ?(
        <Box sx={
          {
            width: "100%",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }
        }>
          <CircularProgress/>
        </Box>

      ):(
        <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap"}}>

          {/* blogs loop start from here */}
          {blogs.map((obj)=>{
            return (
              <Card key={obj.id} sx={{ width: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={obj.image}
                  title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom sx={{ color: "#aaa", fontSize: '15px'}}>
                  @{obj.author}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {obj.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {obj.description.slice(0, 50)}
                </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button> */}
                  <Button onClick={()=>navigate(`/blog/${obj.id}`)} size="small">Learn More</Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      )}
    </Box>
  );
}