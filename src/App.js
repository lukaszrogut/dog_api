import React, {Component} from 'react';
import './App.scss';
import Dog from './components/Dog';
import Modal from './components/Modal';

class App extends Component {

  state = {
    dogBreeds: '',
    breed: '',
    modal: false
  }

  componentDidMount(){
    fetch('https://dog.ceo/api/breeds/list/all')
      .then( res => {
        if (res.ok) return res;
        throw Error(res.statusText)
      })
      .then( res => res.json() )
      .then( data => this.setState({dogBreeds: data.message} ))
      
  }

  handleModal = (id) => {
    this.setState({modal: true, breed: id});
  }

  closeModal = () => {
    this.setState({modal: false, breed: ''});
  }
  

  render(){
    return (
      <div className='dog__wrapper'>
        {this.state.modal && <Modal close={this.closeModal} breed={this.state.breed}/>}
        {Object.keys(this.state.dogBreeds).map( item => <Dog key={item} item={item} openModal={this.handleModal}/> )}
      </div>
    );
  }
}

export default App;
