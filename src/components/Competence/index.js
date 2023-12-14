// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function Competence ({img, title, text}) {
  
  return (
    <article>
      <div className='competences_img-container'>
        {img.map(i => <img key={i.src} src={i.src} alt={i.alt} className="competences_img" />)}
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  )
}

Competence.propTypes = {
  img: PropTypes.array,
  title: PropTypes.string,
  text: PropTypes.string
}
  
export default Competence