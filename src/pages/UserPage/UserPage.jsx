import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';

import UserForm from '../../components/UserForm/UserForm';
import Post from '../../components/Post/Post';
import AlertForm from '../../components/AlertForm/AlertForm';
import { getUserDataRequest } from '../../redux/actions/user';

import './userpage.css';

function UserPage() {
  const dispatch = useDispatch();
  const logginedUserId = localStorage.getItem('userURL');
  const { id } = useParams();
  const isLogginedUser = id === logginedUserId;
  const userData = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(getUserDataRequest(id));
  }, [dispatch]);

  if (error) {
    return <AlertForm alert={error} option="error" />;
  }

  return (
    <section className="user__content ">
      <div className="content__user-info user-info">
        <p className="user-info__header">ABOUT USER:</p>
        <UserForm userData={userData} isLogginedUser={isLogginedUser} className="user-info__container" />
        {isLogginedUser && <Button id="user-info__create-post-bnt" variant="contained" size="large">CREATE NEW POST</Button>}
      </div>

      <div className="content__user-news">
        {userData?.news?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
export default memo(UserPage);
