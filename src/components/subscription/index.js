import React from 'react';

import './_subscription.scss';

class Subscribe extends React.Component {
  state = {inputValue: ''};

  onInputChange = (e) => {
    this.setState({inputValue: e.target.value});
  };

  onButtonClick = () => {
    const {inputValue} = this.state;

    const requestURL = 'http://dev3.apppartner.com/Reactors/scripts/add-email.php';

    const data = {
      field: 'email',
      value: inputValue,
      description: 'Email',
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
    const {inputValue} = this.state;

    return (<section className="subscription" >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="subscription-title">SUBSCRIBE TO NEWSLETTER</h2>
            <div className="subscription-input-wrapper">
              <input className="subscription-input" type="email" placeholder="Your Email" onChange={this.onInputChange} value={inputValue} />
              <button className="subscription-button" onClick={this.onButtonClick}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}

export default Subscribe;
