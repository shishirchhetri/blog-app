import { handleGithubLogin } from '@/lib/action';
import styles from './login.module.css';
import LoginForm from '@/components/loginform/LoginForm';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
        <h5>OR</h5>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
