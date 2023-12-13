// React component
import {Link} from 'react-router-dom'

// Components
import Header from '../../components/Header'
import FormationLabel from '../../components/FormationLabel'
import Competence from '../../components/Competence'

// Style
import './style.scss'

// Images
import openClassrooms from '../../images/openClassrooms.png'
import imgFormation from '../../images/integrateurWeb.png'
import logoHTML from '../../images/competences/HTML.png'
import logoCSS from '../../images/competences/CSS.png'
import logoJS from '../../images/competences/JS.png'
import logoResponsive from '../../images/competences/responsive.png'
import logoReact from '../../images/competences/react.png'
import logoRedux from '../../images/competences/redux.png'
import logoSEO from '../../images/competences/seo.png'
import logoGestion from '../../images/competences/gestion.png'


function Home () {
  
  return (
    <div>
      <Header activeTab="profile"/>
      <main>
        <section className="description">
          <div className="description_photo"></div>
          <div className="description_text">
            <h1>AMANDINE CARTIER-MICHAUD</h1>
            <p>Dévelopeuse web, rigoureuse, créative et motivée !</p>
          </div>
        </section>

        <section className="formation">
          <h1>Formation</h1>
          <div className='formation_container'>
            <div className='formation_card'>
              <Link className="formation_link" target="_blank" to="https://openclassrooms.com/fr/paths/594-integrateur-web">
                <h2>Intégrateur Web</h2>
                <img src={openClassrooms} alt="OpenClassrooms" className="formation_logo" />
              </Link>
              <h3>AVRIL 2023 - DÉCEMBRE 2023</h3>
              <FormationLabel 
                icon="formation_icon fa-solid fa-graduation-cap" 
                title="CERTIFICATION" 
                text="Diplôme de niveau 5 (bac +2)"
              />
              <FormationLabel 
                icon="formation_icon fa-regular fa-calendar" 
                title="PÉRIODE DE FORMATION" 
                text="9 mois à temps plein"
              />
              <FormationLabel 
                icon="formation_icon fa-regular fa-clock" 
                title="DURÉE DE LA FORMATION" 
                text="600 heures supervisées"
              />
            </div>
            <Link className="formation_link" target="_blank" to="https://openclassrooms.com/fr/paths/594-integrateur-web">
              <img src={imgFormation} alt="Intégrateur Web" className="formation_img" />
            </Link>
          </div>
        </section>

        <section className="competences">
          <h1>Compétences</h1>
          <div className="competences_container">
            <Competence 
              img={[{src: logoHTML, alt: "HTML"}, {src: logoCSS, alt: "CSS"}, {src: logoJS, alt: "JavaScript"}]}
              title="Html / Css / Javascript" 
              text="Maîtrise des technologies et des langages techniques les plus demandés."
            />
            <Competence 
              img={[{src: logoResponsive, alt: "Responsive Design"}]}
              title="Responsive Design" 
              text="Mise en place d'un design compatible avec tous les types de navigateurs et tailles d’écrans."
            />
            <Competence 
              img={[{src: logoReact, alt: "React"}, {src: logoRedux, alt: "Redux"}]}
              title="React & Redux" 
              text="Utilisation des technologies React & Redux pour les sites plus complexes (authentification de l'utilisateur, gestion de données, ...)."
            />
            <Competence 
              img={[{src: logoSEO, alt: "SEO"}]}
              title="Optimisation SEO" 
              text="Pour un fonctionnement optimal et une bonne visibilité sur les moteurs de recherche."
            />
            <Competence 
              img={[{src: logoGestion, alt: "Gestion de Projet"}]}
              title="Gestion de Projet" 
              text="Du découpage des tâches du projet à la présentation de la solution, en passant par la rédaction des spécifications techniques."
            />
          </div>
        </section>
      </main>
    </div>
  )
}
  
export default Home