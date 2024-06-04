import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { GrArticle } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
function Articlegenerator() {
  const [topic, setTopic] = useState("");
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateArticle = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("https://studysensei.onrender.com/article", {
        topic,
      });
      setArticle(response.data);
    } catch (err) {
      setError("Error fetching learning content");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(article)
      .then(() => {
        alert("Article copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

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
      <div className="container mx-auto">
        <div className="article-gen">
          <h1>Article Generator</h1>
          <input
            type="text"
            placeholder="Enter the topic you want article for"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <button className="btn" onClick={generateArticle} disabled={loading}>
            {loading ? "Generating..." : "Generate Article"}
          </button>
          {article && (
            <div className="article-box">
              <button className="copy-btn" onClick={copyToClipboard}>
                Copy
              </button>
              <ReactMarkdown>{article}</ReactMarkdown>
            </div>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </>
  );
}

export default Articlegenerator;
