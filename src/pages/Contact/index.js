// Components
import Header from '../../components/Header'

// Style
import './style.scss'


function Contact () {
  
  return (
    <div>
      <Header activeTab="contact"/>
      <main>
        <section className="contact">
          <h1>Contact</h1>
          <form className='contact_form' action="#" method="post">
            <label className="contact_label" htmlFor="name">Nom</label>
            <input className="contact_input" type="text" name="name" id="name"/>
            <label className="contact_label" htmlFor="email">Email</label>
            <input className="contact_input" type="email" name="email" id="email"/>
            <label className="contact_label" htmlFor="message">Message</label>
            <textarea className="contact_textarea" name="message" id="message" cols="60" rows="10"></textarea>
            <div className='contact_button-container'>
              <div className="contact_button">ENVOYER</div>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
  
export default Contact