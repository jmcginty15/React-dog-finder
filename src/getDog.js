import dogs from './dogs';

const getDog = (name) => {
    for (let dog of dogs) {
        if (dog.name.toLowerCase() === name) return dog;
    }
    return null;
}

export default getDog;