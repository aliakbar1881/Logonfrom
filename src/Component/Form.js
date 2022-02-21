import React, { Component } from 'react'
import ajax from './ajax'
import Style from '../css/App.module.css'
class Form extends Component {

    constructor(props) {
        super(props)
        this.userStatus = false
        this.passStatus = false
        this.usertemp = new RegExp("^[a-zA-Z][a-zA-Z0-9]{6,}")
        this.passtemp = new RegExp("^[a-zA-Z0-9]{8,}")
        this.state = {
            userName: '',
            passWord: ''
        }
    }
    // This function should use '.bind(this)' to undrastand namespace 
    passValidation(event) {
        this.setState({
            passWord: event.target.value
        }, () => {
            console.log(this.state.passWord)
            if (this.passtemp.test(event.target.value)) {
                console.log('Pass Correct')
                this.passStatus = true
            }
        })


    }

    userValidation = event => {
        this.setState({
            userName: event.target.value
        }, () => {
            console.log(this.state.userName)
            if (this.usertemp.test(event.target.value)) {
                console.log('User Correct')
                this.userStatus = true
            }
        }
        )
    }


    submitBtn = event => {

        if (!this.passStatus | !this.userStatus) {
            event.preventDefault()
            alert('Your pass or username not correct')
        } else {
            ajax(this.state.userName, this.state.passWord)
            event.preventDefault()
        }
    }
    render() {
        return (<form onSubmit={this.submitBtn} className={Style.form} >
            <label htmlFor='username' >
                Username:
            </label>
            <input id="username" type='text' value={this.state.userName} onChange={this.userValidation} placeholder='username' />
            <label htmlFor="password" >
                Password:
            </label>
            <input id="password" type='password' value={this.state.passWord} onChange={this.passValidation.bind(this)} placeholder='password' />
            <button type='submit' id='submit'>Sign on</button>
            <a id='passwordforget' href='' > forget your password ? </a>
        </form>
        )
    }
}

export default Form