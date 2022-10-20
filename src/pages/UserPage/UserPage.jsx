import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import UserInfo from '../../components/UserInfo/UserInfo';
import Post from '../../components/Post/Post';
import AlertForm from '../../components/AlertForm/AlertForm';
import { getUserDataRequest } from '../../redux/actions/user';

import './userPage.css';

function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userData = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);
  const post1 = useSelector((state) => state.post.post.post);
  const authenthicatedUserId = useSelector((state) => state.auth.user.id);
  const isOwner = Number(id) === authenthicatedUserId;
  useEffect(() => {
    dispatch(getUserDataRequest(id));
  }, [dispatch, id, post1]);

  if (error) {
    return <AlertForm alert={error} option="error" />;
  }
  return (
    <section className="user__content ">
      <div className="content__user-info user-info">
        <p className="user-info__header">ABOUT USER:</p>
        <UserInfo userData={userData} isOwner={isOwner} className="user-info__container" />
      </div>

      <div className="content__user-news">
        {userData.news?.length ? (userData?.news?.map((post) => (
          <Post key={post.id} post={post} />
        ))) : <span className="content__user-news--empty-page"> There is no news yet... </span> }
      </div>
    </section>
  );
}
export default memo(UserPage);
