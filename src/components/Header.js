import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout, startLogin } from '../actions/auth';

export const Header = (props) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Message_Forum</h1>
        </Link>
      
      <div>
        { props.userPresent === false ? <button className="button button--link" onClick={props.startLogin}>Login</button>:
        <button className="button button--link" onClick={props.startLogout}>Logout</button>  }
      </div>
      </div>
      <div className="header__content">
       <div >
        {props.userPresent === true ? <Link className="button" to='/addpost'>Post something new</Link>  : <p></p>}
       </div>
      </div>
    </div>
  </header>
);

const mapStateToProps = (state) => {
  return{
    userPresent: state.auth.anyUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  startLogin: () => dispatch(startLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
