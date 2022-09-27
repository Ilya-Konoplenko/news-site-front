import './mainPage.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsRequest } from '../../redux/actions/news';
import Post from '../../components/Post/Post';
import * as actionTypes from '../../redux/constants';
import newsReducer from '../../redux/reducers/newsReducer';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsRequest());
  }, []);

  const {
    items: postsItems,
    error: postsFetchError,
    fetching: isPostsFetching,
  } = useSelector((state) => state.news);
  console.log(postsItems);
};

export default MainPage;
