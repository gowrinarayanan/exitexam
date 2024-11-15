import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';



const Home = () => {
  const [todos, setTodo] = useState([]);

  

  return (
    <div><br /><br /><br />
      <Grid container spacing={2}>
        {todos.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '300px' }}>
              <CardMedia
                sx={{ height: 250 }}
                
              />
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.todoName}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  <strong>Description:</strong> {item.todoDescription}
                </Typography>
                
                <Typography><br />
                  
                  <br /><br />
                  <Button variant="contained" color="success" onClick={() => deleteTodo(item)}>Delete</Button>
                  <Button variant="contained" color="success" onClick={() => updateTodo(item)}>Update</Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
