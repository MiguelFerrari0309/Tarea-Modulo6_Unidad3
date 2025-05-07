import './../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="images/logo.png" width="100" alt="Refugio MiLu" />
                <h1>Refugio MiLu</h1>
            </div>
        </header>
    );
}

export default Header;