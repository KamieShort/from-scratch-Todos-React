import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from '../../services/users';
import './Auth.css';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [type, setType] = useState('sign-in');

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    if (type === 'sign-in') {
      const resp = await signInUser(email, password);
      setCurrentUser(resp.email);
      history.push('/');
    } else {
      const resp = await signUpUser(email, password);
      setCurrentUser(resp.email);
      history.push('/');
    }
  };

  return (
    <div className="auth">
      <h1 className="auth-span">
        <span className={type === 'sign-in' ? 'active' : ''} onClick={() => setType('sign-in')}>
          Sign-In
        </span>
        <span className={type === 'sign-up' ? 'active' : ''} onClick={() => setType('sign-up')}>
          Sign-Up
        </span>
      </h1>

      <form className="auth-form" onSubmit={submit}>
        <label>
          Email:&nbsp;
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        &nbsp;
        <label>
          Password:&nbsp;
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
