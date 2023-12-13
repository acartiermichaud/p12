// React component
import {Link} from 'react-router-dom'

// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function Tab ({isActive, path, text}) {
  
  return (
    <Link className={isActive?"tab tab_active":"tab"} to={path}>{text}</Link>
  )
}

Tab.propTypes = {
  isActive: PropTypes.bool,
  path: PropTypes.string,
  text: PropTypes.string
}
  
export default Tab