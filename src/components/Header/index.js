// Component
import Tab from '../../components/Tab'

// Style
import './style.scss'


function Header ({activeTab}) {
  
  return (
    <header>
      <nav>
        <Tab isActive={activeTab==="profile"} path="/" text="PROFILE"/>
        <Tab isActive={activeTab==="projects"} path="/projects" text="PROJECTS"/>
        <Tab isActive={activeTab==="contact"} path="/contact" text="CONTACT"/>
      </nav>
    </header>
  )
}
  
export default Header