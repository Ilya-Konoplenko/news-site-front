import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNewsRequest } from '../../redux/actions/news';
import Post from '../../components/Post/Post';
import Spinner from '../../components/Spinner/Spinner';
import AlertForm from '../../components/AlertForm/AlertForm';

import './MainPage.css';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsRequest());
  }, [dispatch]);
  const {
    news: newsItems,
    isLoading,
    error: errorMessage,
  } = useSelector((state) => state.news);

  if (errorMessage) {
    return <AlertForm alert={errorMessage} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (newsItems.length === 0) { return <div>Нет новостей ,сорян</div>; }

  return newsItems.map((post) => (
    <Post key={post.id} post={post} />
  ));
}

export default memo(MainPage);
