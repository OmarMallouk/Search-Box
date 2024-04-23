import React, { useState } from "react";

const paragraph1 = `In computer science, algorithms play a fundamental role in solving computational problems efficiently. These algorithms can range from simple sorting and searching techniques to complex machine learning models. One popular algorithm used in data science is the k-nearest neighbors (KNN) algorithm, which classifies data points based on their proximity to other data points in a feature space. Additionally, computer scientists often employ data structures like trees, graphs, and hash tables to organize and manipulate large datasets effectively. Furthermore, the field of artificial intelligence (AI) continues to advance with breakthroughs in deep learning, natural language processing (NLP), and reinforcement learning, enabling machines to perform tasks that were once thought to be exclusive to human intelligence.`;

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  //Target the search field and store the result in the state
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  //Highlight method integrated below with the searchTerm state
  const highlightText = (text, term) => {
    const regex = new RegExp(`(${term})`, "gi");
    return text.replace(
      regex,
      '<span style="background-color: yellow;">$1</span>'
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search paragraph..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: highlightText(paragraph1, searchTerm),
        }}
      />
    </div>
  );
}

export default SearchBox;
