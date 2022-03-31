import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../../services/users';
import './Auth.css';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser(email, password);
      setCurrentUser(resp.email);
      history.push('/');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h1> Add Title HERE</h1>
      {error && <p>{error}</p>}
      <form className="auth-form" onSubmit={submit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}