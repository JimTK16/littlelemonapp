import Logo from '../assets/Logo.svg'
import Nav from './Nav'
const Header = () => {
  return (
    <header>
      <div>
        <img src={Logo} alt="logo" />
        <Nav />
      </div>
    </header>
  )
}
export default Header
