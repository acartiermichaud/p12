// PropTypes
import PropTypes from 'prop-types'

// Component
import Tab from '../../components/Tab'

// Style
import './style.scss'


function Header ({activeTab}) {
  
  return (
    <header>
      <nav>
        <Tab isActive={activeTab==="profile"} path="/" text="PROFIL"/>
        <Tab isActive={activeTab==="projects"} path="/projects" text="PROJETS"/>
        <Tab isActive={activeTab==="contact"} path="/contact" text="CONTACT"/>
      </nav>
    </header>
  )
}

Header.propTypes = {
  activeTab: PropTypes.string
}
  
export default Header