
import { Outlet } from 'react-router-dom';
import css from './outlet.module.css';
import  Header  from 'components/header/header';


const Layout = () => {
  return (
    <>
 
        <Header />
        <main className={css.main}>
          <Outlet />
        </main>

    </>
  );
}

export default Layout