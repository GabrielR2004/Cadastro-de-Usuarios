import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/layout/Card';

export default (props) => {

  const [users , setUsers] = useState([]);
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
    .then(response => setUsers(response.data))
    .catch(error => console.error('Erro ao buscar usuarios: ' , error));
  } , []);

  const addUser = () => {
    axios.post('http://localhost:5000/api/users' , {name,email,password})
    .then(response => {
      setUsers([...users , response.data]);
      setName('');
      setEmail('');
      setPassword('');
    })
    .catch(error => console.error('Erro ao adicionar usuario: ' ,error));
  };

  return(
    <div>
      <h1>Lista de Usuarios</h1>
      <Card titulo=' Usuarios Cadastrados' color='#6f3cff'>
      <ol>
        {users.map(user => (
          <div className='usuarios'>
            <li key={user._id}>Nome: {user.name} <img src="../src/assets/react.svg" alt="Imagem do react" className='react'/> <br /> Email: {user.email} </li> <br />
          </div>
        ))}
      </ol>
      </Card>

      <h1>Cadastrar Usuarios</h1>
      <Card titulo='Cadastrando usuario' color='#6495ED'>
        <form onSubmit={(e) => { e.preventDefault(); addUser() }} className='formulario'>

          <div className='campos'>
            <label><strong>Nome:</strong></label><br />
            <input className='campoDados'
              type="text"
              required
              placeholder='Nome'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div> <br />

          <div className='campos'>
            <label><strong>Email:</strong></label><br />
            <input className='campoDados'
              type="email"
              required
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div> <br />

          <div className='campos'>
            <label><strong>Senha:</strong></label><br />
            <input className='campoDados'
              type="password"
              required
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> <br />

          <button className='cadastrar' type='submit'>Cadastrar</button>

        </form>
      </Card>
    </div>
  );
}
