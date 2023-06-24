import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { login } from '../redux/auth/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../utils/Loading';
import { useToast } from '@chakra-ui/react';

const initState = {
  email: '',
  password: ''
};

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error, isAuth } = useSelector((store) => store.authReducer);
  const [userData, setUserData] = React.useState(initState);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const inputValue = value;
    setUserData({ ...userData, [name]: inputValue });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  React.useEffect(() => {
    if (error) {
      toast({
        title: error.error,
        description: error.description,
        status: 'warning',
        duration: 5000
      });
    }

    if (isAuth) {
      toast({
        title: 'Login Sussessful!',
        status: 'success',
        duration: 5000
      });
      navigate('/');
    }
  }, [loading, error, isAuth]);

  if (loading) return <Loading />;

  const { email, password } = userData;

  return (
    <div className='flex min-h-full flex-1 bg-indigo-200 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <NavLink to='/'>
          <img
            className='mx-auto h-10 w-auto'
            src={logo}
            alt='TalentTech-logo'
          />
        </NavLink>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' onSubmit={handleLogin}>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900 text-left'
            >
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                value={email}
                onChange={handleChange}
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Password
              </label>
              <div className='text-sm'>
                <p className='font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer inline-block'>
                  Forgot password?
                </p>
              </div>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                value={password}
                onChange={handleChange}
                autoComplete='current-password'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Sign in
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-gray-800'>
          Not a member?{' '}
          <NavLink
            to='/signup'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
