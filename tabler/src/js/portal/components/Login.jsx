import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    // Supabase sign in
    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });
    if (loginError) {
      setError(loginError.message);
    } else if (data?.user) {
      onLogin({ username: data.user.email, role: 'admin' }); // Adjust role logic as needed
    }
  };

  return (
    <div className="login-container">
      <h2>Login Portal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
