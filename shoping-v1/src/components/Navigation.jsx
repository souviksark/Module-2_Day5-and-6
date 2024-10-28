import "../Assets/CSS/navigation.css"
import {Link} from 'react-router-dom'

//Link tag we should use to get our SPA

function Navigation() {
  return (
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/counter'>Counter App</Link></li>
        <li><Link to='/contact'>Contact us</Link></li>
        <li><Link to='/random'>Random User me API</Link></li>
        {/* <li><a class="active" href="/">Home</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li> */}
    </ul>
  )
}
// anchor tage and link => anchor tag will refresh entire web page

export default Navigation

//rfce => to create boiler plate code for function