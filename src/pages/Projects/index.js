// React component
import {Link} from 'react-router-dom'

// Components
import Header from '../../components/Header'
import Card from '../../components/Card'

// Style
import './style.scss'

// Data
import projects from '../../data/projets.json'


function Projects () {
  
  return (
    <div>
      <Header activeTab="projects"/>
      <main>
        <section className="projects">
          <h1>Projets</h1>
          <div className='projects_container'>
            {projects.map(({id, title, subtitle, cover}) =>
              <Link className="projects_link" key={id} to={`/project/${id}`}>
                <Card url={cover} alt={title} title={title} subtitle={subtitle}/>
              </Link>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
  
export default Projects