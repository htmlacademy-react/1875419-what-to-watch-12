import {useRef, FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AppRoute, SignInError, ValidationPattern} from '../../utils/const';
import {AuthData} from '../../types/auth-data';
import {loginAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';


function SignInForm(): JSX.Element {
  const [invalidFields, setInvalidFields] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current && passwordRef.current) {
      const isEmailValid = ValidationPattern.Email.test(loginRef.current.value);
      const isPasswordValid = ValidationPattern.Password.test(passwordRef.current.value);

      if (isEmailValid && isPasswordValid) {
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
        setInvalidFields(false);
        setErrorMessage('');
        navigate(AppRoute.Main);
      } else {
        setInvalidFields(true);
        const error = !isEmailValid ? SignInError.InvalidEmail : SignInError.InvalidPassword;
        setErrorMessage(error);
      }
    }

  };
  return (
    <div className="sign-in user-page__content">
      <form
        action="#"
        className="sign-in__form"
        onSubmit={handleSubmit}
      >
        {invalidFields &&
        <div className='sign-in__message'>
          <p>{errorMessage}</p>
        </div>}
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input
              ref={loginRef}
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input
              ref={passwordRef}
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
