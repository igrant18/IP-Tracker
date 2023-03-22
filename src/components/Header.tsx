import Display from './Display'
import './Header.css'
import Search from './Search'

function Header() {

  return (
    <div className="Header">
      <div className='HeaderText'>
        <h1>IP Address Tracker</h1>
      </div>
      <div className='Search'>
        <Search />
      </div>
      <div className='DisplayRegion'>
        <Display/>
      </div>
    </div>
  )
}

export default Header
