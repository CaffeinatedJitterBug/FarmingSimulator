import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header>
            <div> 
                <div>
                    <h1>Farming Simulator</h1>
                </div>
                <div>
                    {Auth.loggedIn() ? (
                        <>
                            <span>Welcome, {Auth.getProfile().data.username}!</span>
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;