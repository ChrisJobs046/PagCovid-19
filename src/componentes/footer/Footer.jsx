import React from 'react';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="container">
            <p className="float-right"><un href="#">Subir</un></p>
            <p>&copy; {(new Date().getFullYear())} Movimiento ante el covid19, Inc. &middot; <un href="#">Política de Privacidad</un> &middot; <un href="#">Términos</un></p>
        </footer>
 
    )
    
  }
 
}
 
export default Footer;