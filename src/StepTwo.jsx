import { Stats } from "./Stats";
import { Puntajes } from "./Puntajes";
import './App.css';

const questions = [
  'Siento que trabajar todo el día con alumnos/as supone un gran esfuerzo y me cansa.',
  'Creo que trato con mucha eficacia los problemas de mis pacientes/compañeros.',
  'Siento que mi trabajo me está desgastando. Me siento quemado por mi trabajo.',
  'Creo que con mi trabajo estoy influyendo positivamente en la vida de mis  pacientes/compañeros.',
  'Me he vuelto más insensible con la gente desde que ejerzo la profesión docente.'
];

export const StepTwo = (props) => {
  console.log(props);

  const update = (e) => {
    props.update(e.target.name, e.target.value);
  };

  return (
    <div className="container">
        <h3>Parte 2</h3>

        {questions.map((question, i) => (
          <div key={i} className="question">
            <label>{question}</label>
            <select className='form-control' name={`question${i + 6}`} onChange={update}>
                <option value=''>Select an answer</option>
                {Puntajes.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
          </div>
        ))}

        <Stats step={2} {...props} />
    </div>
  );
}