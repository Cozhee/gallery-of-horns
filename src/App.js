import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Main from './components/Main.js'
import Topbar from './components/Topbar.js'
import data from './data.json'
import { Modal } from 'react-bootstrap'

import './App.css';
import React from 'react';
import Selectedbeast from './components/Selectedbeast.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalBehavior: false,
      img: null,
      title: null,
      desc: null,
      votes: null
    };
  }

  changeModalBehavior = (title, desc, image, votes) => {
    this.setState({
      modalBehavior: !this.state.modalBehavior,
      title: title,
      desc: desc,
      img: image,
      votes: votes
    })
  }

  handleClose = () => {
    this.setState({
      modalBehavior: false
    })
  }

  render() {
    return (
      <>
        <Topbar />
        <Header />
        <Main data={data} changeModalBehavior={this.changeModalBehavior} />
        <Footer />

        <Modal show={this.state.modalBehavior}>
          <Selectedbeast
            title={this.state.title}
            description={this.state.desc}
            imgUrl={this.state.img}
            votes={this.state.votes}
            handleClose={this.handleClose}
          />
        </Modal>

      </>
    )
  }
}

export default App;
