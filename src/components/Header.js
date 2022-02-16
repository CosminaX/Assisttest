import './headers.css';
import logo from './logo192.png';

const Header = () => {
  return (
    <div className="wrapper">
        <div class="sidebar">
        <img src={logo} className='logopg'/>
         <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/About'>About</a></li>
          <li><a href='/Contact'>Contact</a></li>
          </ul>
        </div>
        </div>
  )
}

export default Header
