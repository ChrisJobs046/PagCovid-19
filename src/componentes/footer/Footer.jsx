import React, {Component}from 'react';
 
 
class Footer extends Component {
 
  render() {
    return (
        <footer className="container">
            <p>&copy; {(new Date().getFullYear())} Movimiento contra el Covid-19, Inc. &middot; <un href="#">Política de Privacidad</un> &middot; <un href="#">Términos</un></p>
        </footer>
    );
  }
}
 
export default Footer;