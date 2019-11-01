import React from 'react';
import HeaderComponent from '../components/header/HeaderComponent';
import FooterComponent from '../components/footer/FooterComponent';

class UserPageLayout extends React.Component {
  render() {
    const { children, title, isLoggedIn, ...restProps } = this.props;
    return (
      <React.Fragment>
        {!isLoggedIn ? (
          <div>
            <HeaderComponent />

            {children}
          </div>
        ) : (
          <div>
            <HeaderComponent isLoggedIn={true} {...restProps} />
            {children}
          </div>
        )}

        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default UserPageLayout;
