import React, { useState } from "react";
import axios from "axios";
import { GrArticle } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
function LearningAssistant() {
  const [topic, setTopic] = useState("");
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [answerChecked, setAnswerChecked] = useState(false); // Track if answer is checked
  const [quizOver, setQuizOver] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:3000/learn", {
        topic,
      });
      setQuizData(response.data);
    } catch (err) {
      setError("Error fetching learning content");
    } finally {
      setLoading(false);
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (attempts < 10) {
      // Check if attempts are less than 10
      const correctAnswer = quizData[currentQuestionIndex][2].trim();
      const trimmedSelectedOption = selectedOption.trim();
      setIsCorrect(trimmedSelectedOption === correctAnswer);
      setAttempts(attempts + 1);
      setAnswerChecked(true); // Set answerChecked to true when answer is checked
      if (attempts === 9) {
        setQuizOver(true); // Set quizOver to true when attempts reach 10
      }
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setIsCorrect(false);
    setAnswerChecked(false); // Reset answerChecked when moving to next question
  };

  const handlePreviousQuestion = () => {
    setSelectedOption("");
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setIsCorrect(false);
    setAnswerChecked(false); // Reset answerChecked when moving to previous question
  };

  return (
    <div>
      <header className="text-[#21888E] body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex  items-center text-[#21888E] mb-4 md:mb-0">
            <span className="ml-3 text-4xl">🧠 StudySensei</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-[#000000] text-xl cursor-pointer blog">
            <GrArticle className="inline-block m-2" /> Blog
            </a>
            <a className="mr-5 hover:text-[#000000] text-xl cursor-pointer github">
            <FaGithub className="inline-block m-2"/> Github
            </a>
          </nav>
        </div>
      </header>
      <center>
        <h1>Enter the topic for which you want to generate quiz</h1>
      </center>
      <form onSubmit={handleSubmit} className="quiz-form">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic"
        />
        <button type="submit" className="launch-app">
          Generate Quiz
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {quizData && (
        <div className="quiz-container">
          <h2>Quiz Question</h2>
          {quizOver ? (
            <p>Quiz over! You have attempted all questions.</p>
          ) : (
            <>
              <p>{quizData[currentQuestionIndex][0]}</p>{" "}
              {/* Displaying question */}
              <form className="radio-group">
                {quizData[currentQuestionIndex][1]
                  .split(",")
                  .map((option, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        id={option}
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionChange(option)}
                      />
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
              </form>
              <button onClick={handleCheckAnswer} className="check">
                Check Answer
              </button>
              {answerChecked && <p>Attempts: {attempts}</p>}{" "}
              {/* Display attempts only when answer is checked */}
              {isCorrect && <p>Correct!</p>}
              {!isCorrect && answerChecked && (
                <p>Incorrect. Please try again!</p>
              )}
              {currentQuestionIndex > 0 && (
                <button onClick={handlePreviousQuestion} className="previous-q">
                  Previous Question
                </button>
              )}
              {currentQuestionIndex < quizData.length - 1 && (
                <button onClick={handleNextQuestion} className="launch-app">
                  Next Question
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default LearningAssistant;
