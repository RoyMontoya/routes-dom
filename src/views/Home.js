import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props){
    super(props);
    this.state ={
      name: this.props.match.params.name
    }

  }
  render() {
    return (<div>
      <h2>{"Bienvenido a casa ".concat(this.state.name)}</h2>
      <Link to='/contact-us/8481841'>
        <p>Ir a contactos</p>
      </Link>
    </div>);
  }
}

Home.propTypes = {
  match: PropTypes.any
}

export default Home;
