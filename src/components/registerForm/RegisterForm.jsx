'use client';
import { register } from '@/lib/action';
import styles from './registerform.module.css';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type='text' placeholder='Enter Username' name='username' />
      <input type='text' placeholder='Enter Email' name='email' />
      <input type='password' placeholder='Enter Password' name='password' />
      <input
        type='password'
        placeholder='Enter Password again'
        name='passwordRepeat'
      />
      <button>Register</button>
      {state?.error}
      <Link href='/login'>
        Already have an account? <b>Login</b>
      </Link>
    </form>
  );
};
export default RegisterForm;
