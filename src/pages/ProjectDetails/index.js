// React
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

// Component
import Header from '../../components/Header'
import Carousel from '../../components/Carousel'

// Style
import './style.scss'

// Data
import projects from '../../data/projets.json'


function ProjectDetails () {

  const selectedId = useParams().id
  const selectedProject = projects.filter((project) => project.id === selectedId)[0]
  
  return (
    <div>
      <Header activeTab=""/>
        <main className="project_container">
          <section className="project">
            <Link to="/projects"><i className="back-arrow fa-solid fa-arrow-left"></i></Link>
            <h1>{selectedProject.title}</h1>
            <h2 className='project_subtitle'>{selectedProject.subtitle}</h2>
            <div className='project_carousel'><Carousel pictures={selectedProject.pictures}/></div>
            <div className="project_infos">
              <div className="project_description">
                  <h3>DESCRIPTION</h3>
                  <p>{selectedProject.description}</p>
              </div>
              <div className='project_details'>
                <div className="project_competences">
                  <h3>COMPÉTENCES</h3>
                  <div className='project_icons-container'>
                    {selectedProject.competences.map(icon => <img className='project_icon' src={icon} alt={icon} key={icon}></img>)}
                  </div>
                </div>
                <div className='project_links-container'>
                  <Link className='project_link' to={selectedProject.githubpage} target="_blank">
                    <i className="project_logo fa-brands fa-github"></i>
                    <h3>Lien GitHub Pages</h3>
                  </Link>
                  <Link className='project_link' to={selectedProject.github} target="_blank">
                    <i className="project_logo fa-brands fa-github"></i>
                    <h3>Lien GitHub</h3>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
    </div>
  )
}
  
export default ProjectDetails