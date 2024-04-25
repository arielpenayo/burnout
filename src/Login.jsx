import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [isMedic, setIsMedic] = useState(false);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const handleIsMedicChange = () => {
    setIsMedic(!isMedic);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(form);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', }}>
      <h2 style={{ marginBottom: '20px' }}>Síndrome de Burnout</h2>
      {isMedic ? (
        <>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Correo"
            style={{ padding: '10px', fontSize: '16px', width: '200px', marginBottom: '10px' }}
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Contraseña"
            style={{ padding: '10px', fontSize: '16px', width: '200px', marginBottom: '10px' }}
          />
        </>
      ) : (
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Nombre y Apellido"
          style={{ padding: '10px', fontSize: '16px', width: '200px', marginBottom: '10px' }}
        />
      )}
      <button 
        onClick={handleSubmit} 
        style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
       {isMedic ? 'Iniciar sesion como medico' : 'Iniciar Test'} 
      </button>
      <div style={{ marginTop: '20px' }}>
        <label>
          <input type="checkbox" checked={isMedic} onChange={handleIsMedicChange} />
          Es usted médico?
        </label>
      </div>
    </div>
  );
};

export default Login;