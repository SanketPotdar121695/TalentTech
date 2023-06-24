import React from 'react';
import logo from '../assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import instance from '../utils/axiosInstance';

const initState = {
  firstname: '',
  lastname: '',
  email: '',
  password: ''
};

const Signup = () => {
  const [userData, setUserData] = React.useState(initState);
  const [cPass, setCPass] = React.useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const inputValue = value;
    setUserData({ ...userData, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password !== cPass) {
      return toast({
        title: 'Registration failed!',
        description:
          "Please insert the correct password in the 'Confirm Password' field.",
        status: 'warning',
        duration: 5000
      });
    } else {
      instance
        .post('/users/register', userData)
        .then((res) => {
          toast({
            title: res.data.message,
            status: 'success',
            duration: 5000
          });
          navigate('/login');
        })
        .catch((err) => {
          return toast({
            title: err.response.data.error,
            description: err.response.data.description,
            status: 'warning',
            duration: 5000
          });
        });
    }
  };

  const { firstname, lastname, email, password } = userData;

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
          Create a new account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div className='sm:flex w-full align-middle justify-between'>
            <div>
              <label
                htmlFor='firstname'
                className='block text-sm font-medium leading-6 text-gray-900 text-left'
              >
                First Name <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  id='firstname'
                  name='firstname'
                  type='text'
                  value={firstname}
                  onChange={handleChange}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='lastname'
                className='block text-sm font-medium leading-6 text-gray-900 text-left'
              >
                Last Name <span className='text-red-600'>*</span>
              </label>
              <div className='mt-2'>
                <input
                  id='lastname'
                  name='lastname'
                  type='text'
                  value={lastname}
                  onChange={handleChange}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900 text-left'
            >
              Email address <span className='text-red-600'>*</span>
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                value={email}
                onChange={handleChange}
                autoComplete='email'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium leading-6 text-gray-900 text-left'
            >
              Password <span className='text-red-600'>*</span>
            </label>

            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                password={password}
                autoComplete='current-password'
                onChange={handleChange}
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='cPassword'
              className='block text-sm font-medium leading-6 text-gray-900 text-left'
            >
              Confirm Password <span className='text-red-600'>*</span>
            </label>

            <div className='mt-2'>
              <input
                id='cPassword'
                name='cPassword'
                type='password'
                autoComplete='current-password'
                value={cPass}
                onChange={(e) => setCPass(e.target.value)}
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
              Sign up
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-gray-800'>
          Already a member?{' '}
          <NavLink
            to='/login'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
