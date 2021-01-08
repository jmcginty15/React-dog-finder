import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({ dogs }) => {
    return (
        <div>
            <NavLink to="/dogs">Home</NavLink>
            {dogs.map(dog => <NavLink key={dog} to={`/dogs/${dog.toLowerCase()}`}>{dog}</NavLink>)}
        </div>
    )
}

export default Nav;