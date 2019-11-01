import React from 'react';
import Link from 'next/link';
import UserDropdownComponent from './UserDropdownComponent';

const HeaderInfoComponent = ({ isLoggedIn }) => (
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav ml-auto">
      <li className="button-container nav-item iframe-extern">
        <Link href="/share">
          <a className="btn btn-success btn-round btn-block">
            <i className="material-icons">email</i> Create Your Voting
          </a>
        </Link>
      </li>
      {isLoggedIn && <UserDropdownComponent />}
    </ul>
  </div>
);

export default HeaderInfoComponent;
