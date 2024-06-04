import React from "react";
import hero from "../assets/hero.svg";
import puzzle from "../assets/puzzle.svg";
import article from "../assets/article.svg";
import folder from "../assets/folder.svg";
import { Link } from "react-router-dom";
import { GrArticle } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
const FrontUI = () => {
  return (
    <>
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

      <section className="text-[#21888E] body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" sm:text-5xl text-4xl mb-4 font-extrabold text-[#21888E]">
              Improve your mind
              <br className="hidden lg:inline-block" />
              with daily dose of quizzes
            </h1>
            <p className="mb-8 leading-relaxed">
              A customized learning companion for any topic powered by AI
            </p>
            <div className="flex justify-center"></div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </section>

      <section className="text-[#21888E] body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl  text-[#21888E]">Features</h1>
          </div>
          <div className="flex flex-wrap m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-[#FFF6EC] p-8 flex-col text-center">
                <div className="flex items-center mb-3">
                  <h2 className="text-[#21888E] text-lg">
                    Quiz generator for any topic
                  </h2>
                </div>
                <div className="flex-grow">
                  <img src={puzzle} className="scale-50"></img>
                  <Link to="/quizapp">
                    <div className="launch-app">Launch App</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-[#FFF6EC] p-8 flex-col text-center">
                <div className="flex items-center mb-3">
                  <h2 className="text-[#21888E] text-lg">
                    Chat to any PDF and ask question to it
                  </h2>
                </div>
                <div className="flex-grow">
                  <img src={folder} className="scale-50"></img>
                  <Link to="https://chat2pdf-using-gemini.streamlit.app/">
                    <div className="launch-app">Launch App</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-[#FFF6EC] p-8 flex-col text-center">
                <div className="flex items-center mb-3">
                  <h2 className="text-[#21888E] text-lg">
                    Article Generator on any topic using AI
                  </h2>
                </div>
                <div className="flex-grow">
                  <img src={article} className="scale-50"></img>
                  <Link to="/articlegen">
                    <div className="launch-app">Launch App</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-[#21888E] body-font">
        <div className="flex flex-row justify-between">
          {" "}
          <div className=" flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex  items-center md:justify-start justify-center text-[#21888E]">
                <span className="ml-3 text-xl">🧠 StudySensei</span>
              </a>
              <p className="mt-2 text-sm text-[#21888E]">
                Learning companion powered by AI
              </p>
            </div>
          </div>
          <div className="bg-[#C1F1F4]">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-[#21888E] text-sm text-center sm:text-left">
                © 2024 StudySensei —
                <a
                  href="https://twitter.com/ayazmirza54"
                  rel="noopener noreferrer"
                  className="text-[#21888E] ml-1"
                  target="_blank"
                >
                  @ayazmirza
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FrontUI;
