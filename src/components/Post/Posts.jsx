import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from './Post';
import { getNewsRequest } from '../../redux/actions/news';

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsRequest());
  }, [dispatch]);

  const {
    items: postsItems,
    error: postsFetchError,
    fetching: isPostsFetching,
  } = useSelector((state) => state.newsReducer);

  if (isPostsFetching) {
    // тут можно добавить <Spinner/>
    // или без return прямо в jsx {isPostsFetching && <Spinner/>}
    return 'Loading...';
  }

  if (postsFetchError) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(postsFetchError);
      // можно добавить какой-нибудь <Alert type="error"> {postsFetchError.message} </Alert>
      return `Error: ${postsFetchError.message}`;
    }
    return 'Error: hidden';
  }

  return postsItems.map((post) => (

    <Post key={post.id} title={post.title} />

  ));
};

export default Posts;
