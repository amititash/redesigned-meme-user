import React , { Component } from 'react';
import axios from 'axios';
import List from '../UI/List';

class Idea extends Component {

    state = {
        ideas : [],
        email : '',
        activate : false
    }


    inputChangeHandler = (e) => {
        this.setState({
            email : e.target.value
        })
    }
    submitHandler = (e) => {
        this.setState({
            activate : true
        })
        e.preventDefault();
        axios.get(`http://localhost:8000/api/v1/kos/allKos?emailId=${this.state.email}`)
        .then ( response => {
            console.log(response.data)
            this.setState({
                ideas : response.data
            })
        })
        .catch ( e => {
            console.log(e);
        })
        console.log("submit");
    }

    componentDidMount() {
        
    }
    render() {
        let lis = this.state.ideas.map( idea => <List key = {idea._id} title={idea.title} details={idea.details} type={idea.type} />)
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="email" value={this.state.email} onChange={this.inputChangeHandler} />
                    <button type="submit" >Click</button>
                </form>
                { this.state.activate ? ( lis.length ? lis : <h1>No ideas in your binder.</h1>) : <h1>Please enter your email id to fetch ideas.</h1>}
            </div>
        )
        
    }
}

export default Idea;