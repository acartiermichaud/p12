// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function Card ({url, alt, title, subtitle}) {
  
  return (
    <article className='card'>
      <img className='card_image' src={url} alt={alt}></img>
      <h1 className='card_title'>{title}</h1>
      <h2 className='card_subtitle'>{subtitle}</h2>
    </article>
  )
}

Card.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
}
  
export default Card