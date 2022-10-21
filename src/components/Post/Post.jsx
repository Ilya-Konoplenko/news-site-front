import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from '@mui/material';

import { DEFAULT_IMAGE } from './constants';

import './post.css';

function Post({ post }) {
  const path = `/user/${post.userId}`;
  const postImage = post.image ? post.image : DEFAULT_IMAGE;
  const userData = useSelector((state) => state.user.user);
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${process.env.REACT_APP_IMAGE_URL}/${postImage}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography className="card-text" gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography className="card-text" variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </CardContent>
        <a href={path}>{post.user?.username || userData.username}</a>
      </CardActionArea>
    </Card>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    userId: PropTypes.number,
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
};
export default memo(Post);
