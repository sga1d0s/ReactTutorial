import '../css/UserGreeting.css'
import PropTypes from 'prop-types'

// usa props y por defecto prop desestructurada 'username'
function UserGreeting(props, {username = "Guest"}) {

  const welcomeMsg = <h2 className='logged'>Bienvenido {props.username}</h2>
  const loginMsg = <h2 className='not-logged'>Logeate anda... {username}</h2>


  return (props.isLoggedIn ?  welcomeMsg : loginMsg);
  
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}

export default UserGreeting