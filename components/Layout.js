import style from '../styles/Layout.module.css';
import NavBar from './NavBar';

function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div className={style.container}>
                <main className={style.main}>{children}</main>
            </div>
        </>
    );
}

export default Layout;
