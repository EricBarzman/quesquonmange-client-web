'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { login } from '@/hooks/auth.hooks';


interface Inputs {
  email: string;
  password: string;
}

function LoginForm() {

  const [isAuthenticating, setIsAuthicating] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    setIsAuthicating(true);
    try {
      await login(email, password);
      router.push('/');

    } catch (error) {
      console.error(error);
    } finally {
      setIsAuthicating(false);
    }
  }

  return (
    <form className='flex flex-col items-center w-2/3' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col mb-6 w-2/3'>
        <label className='text-sm'>Mail</label>
        <input
          className='p-4 rounded-2xl bg-gray-200'
          type="email"
          placeholder='Mail'
          {...register("email")}
        />
      </div>
      <div className='flex flex-col mb-6 w-2/3'>
        <label className='text-sm'>Mot de passe</label>
        <input
          className='p-4 rounded-2xl bg-gray-200'
          type="password"
          placeholder='Mot de passe'
          {...register("password")}
        />
      </div>
      <button disabled={isAuthenticating} type='submit' className='w-1/3 rounded-xl bg-secondary-light hover:bg-secondary-dark cursor-pointer p-4'>
        Connexion
      </button>
    </form>
  )
}

export default LoginForm