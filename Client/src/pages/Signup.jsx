import React from 'react';
import { NavLink } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

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
  const passwordInputRef = React.useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const inputValue = value;
    setUserData({ ...userData, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isEmpty = false;
    console.log(passwordInputRef.current.validity);

    Object.keys(userData).map((key) => {
      if (userData[key].length === 0) {
        isEmpty = true;
      }
      return key;
    });

    if (isEmpty) {
      return toast({
        title: 'Registration failed.',
        description: 'Please fill out the necessary information.',
        status: 'warning',
        duration: 5000
      });
    } else {
      let password = passwordInputRef.current.value;
      let message = '';
      passwordInputRef.current.setCustomValidity(message);

      if (password.length < 8) {
        message = 'Password should be atleast 8 characters long.';
      } else {
        let nums = false;
        let splChars = false;
        let upperChars = false;

        for (let i = 0; i < password.length; i++) {
          if (password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 64) {
            isNaN(password[i]) ? (splChars = true) : (nums = true);
          } else if (
            password.charCodeAt(i) >= 65 &&
            password.charCodeAt(i) <= 90
          ) {
            upperChars = true;
          }
        }

        // if (!nums || !splChars || !upperChars) {
        //   message =
        //     'Password should contain atleast one uppercase character, one number & a special character.';
        // }
      }

      passwordInputRef.current.setCustomValidity(message);
      passwordInputRef.current.reportValidity();

      if (message.length) {
        return toast({
          title: 'Registration failed.',
          status: 'warning',
          duration: 5000
        });
      } else {
        return toast({
          title: 'Registration successful.',
          status: 'success',
          duration: 5000
        });
      }
    }
  };

  // const handleInvalidPass = (e) => {
  //   let password = passwordInputRef.target.value;
  //   let message = '';

  //   if (password.length < 8) {
  //     message = 'Password should be atleast 8 characters long.';
  //   } else {
  //     let nums = false;
  //     let splChars = false;
  //     let upperChars = false;

  //     for (let i = 0; i < password.length; i++) {
  //       if (password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 64) {
  //         isNaN(password[i]) ? (splChars = true) : (nums = true);
  //       } else if (
  //         password.charCodeAt(i) >= 65 &&
  //         password.charCodeAt(i) <= 90
  //       ) {
  //         upperChars = true;
  //       }
  //     }

  //     if (!nums || !splChars || !upperChars) {
  //       message =
  //         'Password should contain atleast one uppercase character, one number & a special character.';
  //     }
  //   }

  //   e.target.setCustomValidity(message);
  //   e.target.reportValidity();
  // };

  const { firstname, lastname, email, password } = userData;

  return (
    <div className='flex min-h-full flex-1 bg-indigo-200 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img
          className='mx-auto h-10 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt='Your Company'
        />
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
                ref={passwordInputRef}
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
