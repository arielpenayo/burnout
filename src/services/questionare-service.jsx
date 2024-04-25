import axios from "axios"; 
const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL",API_URL);
const getQuestionareData = () => {
    return axios
        .get(API_URL + "cuestionarios/")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
const getQuestionareDataFilteredByUser = (userId) => {
    return axios
        .get(API_URL + `cuestionarios/?userId=${userId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}
  

const QuestionareService = {
    getQuestionareData,
    getQuestionareDataFilteredByUser
};

export default QuestionareService;