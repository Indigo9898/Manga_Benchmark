import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Container className='p-none m-none' tag="main">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
