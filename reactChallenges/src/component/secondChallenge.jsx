
function AnimalList(props) {
    return (
    <ul>
        {props.animals.map(animal => (
        <li key={animal.id}>{animal.name}</li>
        ))}
    </ul>
    );
}

const animals = [
    {id: 1 , name: "Tiger" },
    {id: 2 , name: "Lion"},
    {id: 3 , name: "Python"}
];

ReactDOM.render(<AnimalList animals={animals} />, document.getElementById("root"));

export default AnimalList;