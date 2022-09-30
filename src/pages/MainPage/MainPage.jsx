import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNewsRequest } from '../../redux/actions/news';
import Post from '../../components/Post/Post';
import Spinner from '../../components/Spinner/Spinner';
import AlertForm from '../../components/AlertForm/AlertForm';

import './mainpage.css';

function MainPage() {
  const TEXT_INFO = 'Кажется здесь пусто';
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

  const newsArray = postsItems.map((post) => (
    <Post key={post.id} post={post} />));

  return (
    <div className="main-section">
      {newsArray}
    </div>
  );
}

export default memo(MainPage);
