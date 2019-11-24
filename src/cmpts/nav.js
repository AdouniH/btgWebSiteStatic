import React from 'react';
import './nav.css';
import slide from './slide.png';
import logo from './logo.png';


class Nav extends React.Component {
      constructor(props) {
      super(props);
      this.state = {
          name: "",
          lastname: "",
          phone: "",
          email: "",
          message: ""
      };
      this.handleChange = this.handleChange.bind(this)
      this.envoie = this.envoie.bind(this)
    }

    handleChange(event) {
      var name = event.target.name;
      var value = event.target.value;
      this.setState({[name]: value})
    }

    envoie(e) {
      e.preventDefault();
      var valeurs = this.state;
      console.log(valeurs);
    }

    render() {
      return(
        <div>
              <div>
                <ul class='nav'>
                    <li><a href="/">Contactez le Geometre Expert : (+216) 98619055 </a></li>
                </ul>
              </div>
              <div class='second'>
                  <div class='leftside'>
                  </div>
                  <div class='rightside'>
                      <div class='competences'>
                          <h1 id='titlepage'> Bureau Topographie & Geomatique</h1>
                      </div>
                      <img id='imgo' src={slide} alt="slide" />
                        <div id='map'>
                            <div class="mapouter"><div class="gmap_canvas">
                                <iframe width="100%"
                                      height="380"
                                      id="gmap_canvas"
                                      src="https://maps.google.com/maps?q=4054%20Avenue%20de%20Yasser%20Arafat%2C%20Hammam%20Sousse%2C%20Tunisie&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                      frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe>
                            </div>
                        </div>
                      </div>
                      <div class='form-contact'>
                            <form onSubmit={this.envoie}>
                                <div class='row'>
                                    <label class= 'label-names' for="fname">Nom</label>
                                    <input class= 'input-names' type="text" id="fname" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}></input>
                                </div>
                                <div class='row'>
                                  <label class= 'label-names' for="phone" required>Phone</label>
                                  <input class= 'input-names' type="tel" id="phone" name="phone" placeholder="Votre numero de tel" value={this.state.phone} onChange={this.handleChange}></input>
                                </div>

                                <div class='row'>
                                  <label class= 'label-names' for="email">email</label>
                                  <input class= 'input-names' type="email" id="email" name="email" placeholder="Votre email" value={this.state.email} onChange={this.handleChange}></input>
                                </div>

                                <div class='row'>
                                  <label class= 'label-names' for="text">Text</label>
                                  <textarea class="texto input-names" id="msg" name="message"  data-msg="Please write something for us" placeholder="Message" value={this.state.message} onChange={this.handleChange}> </textarea>
                                </div>

                                <div class='row'>
                                  <button class='submit' value="Envoyer"> Envoyer </button>
                                </div>
                            </form>
                      </div>
                  </div>
                  <div class='leftside'>

                  </div>
              </div>
        </div>
      );
    }
  }
export default Nav;
