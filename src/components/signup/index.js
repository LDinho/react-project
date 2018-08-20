import React from 'react';
import emailIcon from '../../images/ic-email.png';
import passwordIcon from '../../images/ic-password.png';
import usernameIcon from '../../images/ic-username.png';

import './_signup.scss';

class Signup extends React.Component {
  state = {
    activeTab: 'login',
    username: '',
    password: '',
    email: '',
  };

  onTabClick = (type) => {
    this.setState({activeTab: type});
  };

  onUserNameChange = (e) => {
    this.setState({username: e.target.value});
  };

  onPasswordChange = (e) => {
    this.setState({password: e.target.value});
  };

  onEmailChange = (e) => {
    this.setState({email: e.target.value});
  };

  onButtonClick = () => {
    const {username, password, email, activeTab} = this.state;
    const isLogin = activeTab === 'login';


    const requestURL = isLogin ? 'http://dev3.apppartner.com/Reactors/scripts/user-login.php' : 'http://dev3.apppartner.com/Reactors/scripts/user-signup.php';

    const data = {
      username,
      password,
      email,
    };

    const otherParams = {
      headers: {
        'Content-Type':'application/json; charset=utf-8'
      },
      body: JSON.stringify(data),
      method: 'POST',
    };

    fetch(requestURL, otherParams)
      .then(data => data.json())
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };


  render() {
    const {activeTab, username, password, email} = this.state;
    const isLogin = activeTab === 'login';
    const isSignup = activeTab === 'sign up';
    const signUpTabClasses = isSignup ? 'signup-nav-item active' : 'signup-nav-item';
    const loginTabClasses = isLogin ? 'signup-nav-item active' : 'signup-nav-item';

    return (
      <div className="signup">
        <nav className="signup-nav">
          <ul className="signup-nav-list">
            <li className={signUpTabClasses} onClick={()=> this.onTabClick('sign up')}>Sign Up</li>
            <li className={loginTabClasses} onClick={()=> this.onTabClick('login')}>Login</li>
          </ul>
        </nav>
        {isSignup && (
            <div className="signup-input-wrapper">
              <img className="signup-icon" src={usernameIcon} alt="username icon" />
              <input className="signup-input" type="text" name="username" placeholder="Username" onChange={this.onUserNameChange} value={username} />
            </div>
          )
        }

        <div className="signup-input-wrapper">
          <img className="signup-icon" src={emailIcon} alt="email icon" />
          <input className="signup-input" type="text" name="email" placeholder="Email" onChange={this.onEmailChange} value={email} />
        </div>
        <div className="signup-input-wrapper">
          <img className="signup-icon" src={passwordIcon} alt="password icon" />
          <input className="signup-input" type="text" name="password" placeholder="Password" onChange={this.onPasswordChange} value={password} />
        </div>
        <button className="signup-button" onClick={this.onButtonClick}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

      </div>
    );
  }
}

export default Signup;
