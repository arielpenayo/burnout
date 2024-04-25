import { Stats } from "./Stats";
import { Puntajes } from "./Puntajes";
import './App.css';

const questions = [
  'Pienso que este trabajo me está endureciendo emocionalmente.',
  'Me siento con mucha energía en mi trabajo.',
  'Me siento frustrado/a en mi trabajo.',
  'Creo que trabajo demasiado.',
  'No me preocupa realmente lo que les ocurra a algunos de mis alumnos/as.'
];

export const StepThree = (props) => {
  console.log(props);

  const update = (e) => {
    props.update(e.target.name, e.target.value);
  };

  return (
    <div className="container">
        <h3>Parte 3</h3>

        {questions.map((question, i) => (
          <div key={i} className="question">
            <label>{question}</label>
            <select className='form-control' name={`question${i + 11}`} onChange={update}>
                <option value=''>Select an answer</option>
                {Puntajes.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
          </div>
        ))}

        <Stats step={3} {...props} />
    </div>
  );
}