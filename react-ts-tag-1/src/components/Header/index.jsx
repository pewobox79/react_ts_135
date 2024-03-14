import Navigation from '../Navigation'
import styles from './styles/Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.headerInner}>
                <Navigation/>
            </div>
        </header>
    )
}

export default Header
