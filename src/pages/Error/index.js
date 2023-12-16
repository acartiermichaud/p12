// React component
import {Link} from 'react-router-dom'

// Components
import Header from '../../components/Header'

// Style
import './style.scss'


function Error () {
  
  return (
    <div>
      <Header activeTab=""/>
      <main>
        <section className='error'>
          <h1>404</h1>
          <h2>Page non trouvée.</h2>
          <Link className="error_link" to="/">Retour à la page d'accueil</Link>
        </section>
      </main>
    </div>
  )
}
  
export default Error