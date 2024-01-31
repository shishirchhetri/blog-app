import { register } from '@/lib/action';
import styles from './register.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={register} className={styles.form}>
          <input type='text' placeholder='Enter Username' name='username' />
          <input type='text' placeholder='Enter Email' name='email' />
          <input type='password' placeholder='Enter Password' name='password' />
          <input
            type='password'
            placeholder='Enter Password again'
            name='passwordRepeat'
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
