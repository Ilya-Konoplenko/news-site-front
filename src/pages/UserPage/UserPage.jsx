import React from 'react';
import UserForm from '../../components/UserForm/UserForm';

import './userpage.css';

export default function UserPage() {
  return (
    <section className="user__content ">
      <div className="content__user-info">
        <UserForm classNama="container" />
      </div>

      <div className="content__user-news">
        .
      </div>
    </section>
  );
}
