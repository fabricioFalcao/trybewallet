import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStateType, UserType } from '../types';
import { submitUserData } from '../redux/actions';

function Login() {
  const navigate = useNavigate();

  const userData = useSelector((state: GlobalStateType) => state.user);

  const dispatch = useDispatch();

  const [login, setLogin] = useState<UserType>(userData);
  const { email, password } = login;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = event.target;
    setLogin({
      ...login,
      [id]: value,
    });
  };

  const validForm = (
    password.length >= 6
    && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/.test(login.email)
  );

  return (
    <section className="login-container">
      <form
        onSubmit={ (event) => {
          event.preventDefault();
          dispatch(submitUserData(login));
          navigate('/carteira');
        } }
        action=""
        className="form"
      >
        <input
          type="email"
          required
          placeholder="E-mail"
          data-testid="email-input"
          id="email"
          value={ email }
          onChange={ handleChange }
        />

        <input
          type="text"
          required
          placeholder="Senha"
          data-testid="password-input"
          id="password"
          value={ password }
          onChange={ handleChange }
        />

        <button
          type="submit"
          disabled={ !validForm }
        >
          Entrar

        </button>
      </form>
    </section>
  );
}

export default Login;
