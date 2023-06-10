import React from "react";
import './styles.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { Rating } from "@mui/material";

const UpdateRating = ({id}) => {
  const linkLocal = 'http://localhost:3006/api/'
  const linkServer = 'https://miniretointento2.herokuapp.com/api/'
  const [rating, setRating] = React.useState('1');

  const handleChange = (event) => {
    axios({
      method: 'patch',
      url: (linkLocal + id),
      data: {
        rating: (event.target.value)
      }
    });
    };
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Rating}
            label="Rating"
            onChange={handleChange}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </Box>
      );
    }
    
export default UpdateRating;