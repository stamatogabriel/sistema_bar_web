import React, { Component } from "react";
import api from '../../services/api';


export default class Register extends Component {

    state={
        username: '',
        password: '',
        manager: '',
        error: ''
    }

    async componentDidMount(){
        if (!("Notification" in navigator)) {
            console.log('Esse browser não suporta notificações desktop');
          } else {
            if (Notification.permission !== 'denied') {
              // Pede ao usuário para utilizar a Notificação Desktop
              await Notification.requestPermission();
            }
          }
    }

    handleRegister = async e => {
        const { username, password, manager } = this.state;
        if (!username || !password) {
            this.setState({ error: "Preencha todos os campos para cadastro do funcionário" });
        }else {
            try{
                await api.post('/register', { username, password, manager });
                
                wsNotification.on('new', () => {
                    if (Notification.permission === 'granted') {
                      const notification = new Notification('Título', {
                        body: 'Funcionário cadastrado com sucesso'
                      });
                      
                      notification.onclick = (e) => {
                        e.preventDefault();
                        window.focus();
                        notification.close();
                      }
                    }
                  });
            }
        }
    }

  render() {
    return <h1> Hello World</h1>;
  }
}
