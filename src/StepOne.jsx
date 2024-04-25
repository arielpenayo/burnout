import { Stats } from "./Stats";
import { Puntajes } from "./Puntajes";
import './App.css';
import QuestionareService from "./services/questionare-service";
import { useState,useEffect } from "react";

const questions = [
  'Me siento emocionalmente agotado/a por mi trabajo',
  'Me siento cansado al final de la jornada de trabajo',
  'Cuando me levanto por la mañana y me enfrento a otra jornada de trabajo me siento fatigado.',
  'Tengo facilidad para comprender cómo se sienten mis pacientes/compañeros.',
  'Creo que estoy tratando a algunos alumnos/as como si fueran objetos impersonales.'
];

export const StepOne = (props) => {
  console.log(props);
  const [data, setData] = useState([]);
  useEffect(() => {
    QuestionareService.getQuestionareData().then((response) => {
      console.log("response",response);
      setData(response);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  const update = (e) => {
    props.update(e.target.name, e.target.value);
  };

  return (
    <div className="container">
    <h3>Parte 1</h3>

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

    <Stats step={1} {...props} />
</div>
  );
}