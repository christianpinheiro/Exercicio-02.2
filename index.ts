// Import stylesheets
import { Person } from './person';
import './style.css';

// Utilizando classe externa
let nome = new Person("Christian","Alves","Pinheiro",28);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Exercício 02.2</h1>
<div>${nome.getFullName()}</div>
<div>${nome.getBirthdayYear()}</div>
`;