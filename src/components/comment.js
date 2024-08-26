import React from "react";
import { Button, Container, Typography, TextField } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './comment.scss'; // Импорт стилей

function Comment({ reviews, comment, setComment, submitReview }) {
  const path_to_avatar = "http://example.com/path/to/avatars";

  return (
    <Container className="review-container my-4">
      <Typography variant="h4" className="mb-4">Отзывы</Typography>
      <div>
        {Array.isArray(reviews) && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="mb-3">
              <Typography variant="subtitle1">{review.name}</Typography>
              <img src={`${path_to_avatar}/${review.name}`} alt="avatar" className="avatar rounded-circle" height="30" width="30" />
              <Typography variant="body2">
                <p>{review.comment}</p>
              </Typography>
            </div>
          ))
        ) : (
          <Typography variant="body1">Нет отзывов для отображения.</Typography>
        )}
      </div>
      <Typography variant="h6">Оставьте ваш отзыв:</Typography>
      <TextField
        label="Ваш отзыв"
        multiline
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        fullWidth
      />
      <Button variant="contained" type="submit" onClick={submitReview}>Отправить отзыв</Button>
      <ToastContainer />
    </Container>
  );
}

export default Comment;
