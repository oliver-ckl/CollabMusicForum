import Nav from './Nav'
import style from '../styles/Layout.module.css'

function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className={style.container}>
                <main className={style.main}>{children}</main>
            </div>
        </>
    )
}

export default Layout
