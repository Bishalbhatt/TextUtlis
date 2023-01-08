import PropTypes from 'prop-types'
//import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className="nav" style={props.mode}>
        <h1>
          <a href="#" style={props.mode}>{props.title}</a>
        </h1>
        <p>
          <a href="#" style={props.mode}>Home</a>
        </p>
        {/*  
        <p>
          <Link to="/about" style={props.mode}>About</Link>
        </p>
        */}
        <button id="toggle" onClick={props.toggleMode}>{props.text}</button>
        <button id="toggleRed" onClick={props.toggleRedMode}>{props.text}</button>
        <button id="toggleGreen" onClick={props.toggleGreenMode}>{props.text}</button>
      </nav>
    </div>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired
}
// Navbar.defaultProps={
//     title: 'Set title here'
// }
