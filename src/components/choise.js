import React, { useEffect, useState } from "react";
import images from './img.js';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, Button, Grid, Card, CardContent, Typography } from "@mui/material";
import Comment from './comment.js';

function Choise() {
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const path_to_avatar = "http://example.com/path/to/avatars";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('');
        if (Array.isArray(response.data)) {
          setReviews(response.data);
        } else {
          console.error('Fetched data is not an array:', response.data);
          setReviews([]);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setReviews([]);
      }
    };
    fetchReviews();
  }, []);

  const submitReview = async (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    const newReview = {
      name: "Имя пользователя",
      comment,
      date,
      time,
    };

    try {
      await axios.post('', newReview);
      setReviews([...reviews, newReview]);
      setComment('');
      setDate('');
      setTime('');
      toast.success("Отзыв успешно отправлен!");
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error("Ошибка при отправке отзыва.");
    }
  };

  return (
    <div className="container">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src="https://открыватор.москва/file/2015/10/karta-moskvi.jpg" height="180px" width="250px" />
        </Grid>
        <Grid item xs={6}>
              <Typography variant="h5">Набережная</Typography> 
              <Typography variant="body2">
                <img src={images.point} height="23px" width="23px" /> Адрес:
              </Typography>
              <Button variant="contained" color="success">Я приду</Button>
        </Grid>
      </Grid>
      <br />
      <form onSubmit={submitReview}>
        <TextField
          label="Дата"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          InputLabelProps={{ shrink: true }}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Время"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          InputLabelProps={{ shrink: true }}
          margin="normal"
          fullWidth
        />
        <Comment
          reviews={reviews}
          comment={comment}
          setComment={setComment}
          submitReview={submitReview}
        />
      </form>
      <ToastContainer />
    </div>
  );
}

export default Choise;
