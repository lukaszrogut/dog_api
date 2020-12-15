import React, { Component } from 'react'

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            breed: this.props.breed,
            image: ''
        }
    }
    
    componentDidMount = () => {
        fetch(`https://dog.ceo/api/breed/${this.props.breed}/images/random`)
            .then(res => {
                if (res.ok) return res;
                throw Error(res.statusText)
            })
            .then(res => res.json())
            .then(data => this.setState(prevState => {
                return { image: data.message }
            }))

    }
    getRandomImage = () => {
        let breed = this.state.breed;
        console.log('fetching');
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(res => {
                if (res.ok) return res;
                throw Error(res.statusText)
            })
            .then(res => res.json())
            .then(data => this.setState({ image: data.message }
            ))
    }
    render(){
        return(
            <div className='modal-wrapper'> 
                {console.log('BREED', this.state.breed)}  
                <div className='modal'>
                    <img src = {this.state.image}
                    alt = {this.props.breed}/>
                    <div className="buttons">                        
                        <button onClick={this.getRandomImage}>Random Image</button>
                        <button className='red' onClick={this.props.close}>Close Modal</button>
                    </div>
                </div>             
            </div>
        )
    }
}

export default Modal;