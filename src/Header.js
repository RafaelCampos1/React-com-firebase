import {useEffect,useState} from 'react'
import logo from './img/logo.png';
import {myAuth} from './firebase';

function Header(props){

  function logon(e){
    e.preventDefault();
    let emailLogin = document.getElementById('emailLogin').value;
    let passwordLogin = document.getElementById('passwordLogin').value;

    myAuth.signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((auth)=>{
      props.variavel_usuario(auth.user.displayName);
      alert('logado com sucesso');
      window.location.href = "/";
    }).catch((error)=>{
      alert(error.message)
    })
  }

  function logout(e){
    e.preventDefault();


    myAuth.signOut().then(()=>{
      window.location.href = "/";
    }).catch((error)=>{
      alert(error.message)
    })
  }
    
    function abrirModalCriarConta(e){
        e.preventDefault();
        let modal = document.querySelector('.modalCriarConta');
        modal.style.display = 'block';
    }

    function closeModal(){
      let clsModal = document.querySelector('.modalCriarConta');
      clsModal.style.display = 'none';
    }

    function checkFinish(e){
      e.preventDefault();
      let email = document.getElementById('email').value;
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;
      let passwordRepeat = document.getElementById('passwordRepeat').value;

      if(password != passwordRepeat){
        alert("senhas nao batem")
        e.preventDefault();
      }else{
 
     
      myAuth.createUserWithEmailAndPassword(email, password)
      .then((authUser)=>{
            authUser.user.updateProfile({
              displayName: username
            })
            alert('conta criada com sucesso');
      }).catch((error)=>{
        alert(error.message);

      })
      ;
    }
  }

    return(

<div className="header">
        <div className = "modalCriarConta">
            <div className="formCriarConta">
              <div onClick={()=>closeModal()} className = "close_modal">X</div>
            <h2>Crie sua conta</h2><br></br>
                <form>
                <input id = "email" type="text" placeholder="seu email"/>
                <input id = "username" type="text" placeholder="seu username"/>
                <input id = "password" type="password" placeholder="sua senha"/>
                <input id = "passwordRepeat" type="password" placeholder="repetir senha"/>
                <input onClick={(e)=>checkFinish(e)} type="submit" value = "Criar Conta"/>
                
                </form>
            </div>
        </div>


    <div className = "center">
        <div className = "header_logo">

      <a href = "">
        <img  alt="logo" src = {logo}/>
      </a>
    </div>

    {
      (props.usuario)?
      <div className = "logado">
        <p>Ola <b>{props.usuario}</b></p>
        <input onClick={(e)=>logout(e)} id= "deslogar" type = "submit" value = "deslogar"></input>
      </div>
      :
      <div className = "header_loginForm">

  <div className = "logon">
    <form>
        <input id="emailLogin" type = "text" placeholder = "Login..."/>
        <input id="passwordLogin" type = "password" placeholder = "Senha..."/>
        <input onClick={(e)=>logon(e)} type = "submit" name = "acao" value = "Logar!"/>
    </form>
      <div className = "make_account">
        <a onClick={(e)=>abrirModalCriarConta(e)}href = "#">Criar Conta</a>
      </div>
    </div>
    
  </div>
    }

  

  </div>
</div>
    );

}


export default Header;