import { Redirect, useParams } from 'react-router-dom';
import getDog from './getDog';

const DogDetails = () => {
    const { name } = useParams();
    const dog = getDog(name);

    return (
        <div>
            {dog ? (
                <div>
                    <h2>{dog.name}</h2>
                    <h4>Age: {dog.age}</h4>
                    <img src={dog.src} alt={dog.name.toLowerCase()} />
                    <ul>
                        {dog.facts.map(fact => <li key={fact}>{fact}</li>)}
                    </ul>
                </div>
            ) : <Redirect to="/dogs" />}
        </div>
    )
}

export default DogDetails;