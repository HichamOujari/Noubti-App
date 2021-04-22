import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./style.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Axios from "axios"

class AuthPage extends Component {
    state={
        passMod:0,
        email:"",
        password:"",
        confirmPass:"",
        errorlogin:false,
        errorSignup:false,
        errorPass:false,
    }
    authentifier = (e)=>{
        e.preventDefault()

        let path;
        if(this.props.isLogin===true) path = this.props.path+":"+this.props.port+"/auth/login"
        else {
            if(this.state.confirmPass!==this.state.password){
                this.setState({
                    errorSignup:false,errorPass:true,errorlogin:false
                })
                return;
            }else{
                path = this.props.path+":"+this.props.port+"/auth/signup"
            }
            
        }
        document.location.href=this.props.path+"/home"
        /*Axios.post(path,{
            email:this.state.email,
            password:this.state.password
        }).then((response)=>{
            if(response.data.error===false){
                document.location.href=this.props.path+":3000"+"/home"
            }else{
                if(this.props.isLogin===false) this.setState({errorSignup:true,errorPass:false,errorlogin:false})
                else this.setState({errorSignup:false,errorPass:false,errorlogin:true})
            }
        })*/
    }
    render() {
        return (
            <div className="MainAuth">
                <div className="top">
                    <p className="title">Bienvenue</p>
                    <div className="login_regist">
                        <Link className={this.props.isLogin===true?"active":""} to="/login">Connectez-vous</Link>
                        <Link className={this.props.isLogin===false?"active":""} to="/signup">Inscrivez-vous</Link>
                    </div>
                </div>
                <AccountCircleIcon className="iconProfil" />
                <form onSubmit={this.authentifier} className="formAuth">
                    {this.state.errorlogin===true?<p className="errorAuth">Email ou mot de passe incorrect</p>:null}
                    {this.state.errorPass===true?<p className="errorAuth">Les mots de passes ne sont pas identiques</p>:null}
                    {this.state.errorSignup===true?<p className="errorAuth">Email deja utilisé</p>:null}
                    <input onChange={(e)=>this.setState({email:e.target.value})} required={true} type="email" className="AuthInput" placeholder="Email" />
                    <input onChange={(e)=>this.setState({password:e.target.value})} required={true} type={this.state.passMod%2===0?"password":"text"} className="AuthInput" placeholder="Mot de passe" />
                    {this.props.isLogin===true?null:<input onChange={(e)=>this.setState({confirmPass:e.target.value})} required={true} type={this.state.passMod%2===0?"password":"text"} className="AuthInput" placeholder="Confirmer le mot de passe" />}
                    <div className="showPass">
                        <input id="IdCheckPass" type="checkbox" onClick={()=>this.setState({passMod:this.state.passMod+1})} />
                        <label htmlFor="IdCheckPass"> Afficher le mot de passe</label>
                    </div>
                    <input className="btnSubmit" type="submit" value={this.props.isLogin===true?"Se connecter":"S'inscrire"} />
                </form>
            </div>
        );
    }
}

export default AuthPage;