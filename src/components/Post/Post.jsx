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

function Post({ post }) {
  const path = `/user/${post.userId}`;
  const userData = useSelector((state) => state.user.user);
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
          <a href={path}>{post.user?.username || userData.username}</a>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    imgae: PropTypes.string,
    userId: PropTypes.number,
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
};
export default memo(Post);
