import { Link } from 'react-router-dom';
import './DogList.css';

const DogList = ({ dogs }) => {
    return (
        <div className="DogList">
            <h2>Find a dog:</h2>
            <ul>
                {dogs.map(dog => <li key={dog}><Link to={`/dogs/${dog.toLowerCase()}`}>{dog}</Link></li>)}
            </ul>
        </div>
    )
}

export default DogList;