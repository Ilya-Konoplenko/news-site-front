import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../../components/Post/Post';
import Spinner from '../../components/Spinner/Spinner';
import AlertForm from '../../components/AlertForm/AlertForm';

import { getNewsRequest } from '../../redux/actions/news';

import './mainPage.css';

const TEXT_INFO = 'I think there is not news yet';

function MainPage() {
  const dispatch = useDispatch();
  const postsItems = useSelector((state) => state.news.news);
  const isLoading = useSelector((state) => state.news.isLoading);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
    dispatch(getNewsRequest());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <AlertForm alert={error} option="error" />;
  }

  if (postsItems.length === 0) {
    return <AlertForm alert={TEXT_INFO} option="info" />;
  }

  return (
    <div className="main-section">
      {postsItems.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default memo(MainPage);
