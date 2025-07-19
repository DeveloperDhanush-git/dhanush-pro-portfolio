import styled from "styled-components";
import Typewriter from "typewriter-effect";

// Styled Terminal Box
const TerminalContainer = styled.div`
  position: absolute; /* Changed from absolute */
  z-index: -1; /* Moves it behind other elements */
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  padding: 120px 50px;
 
  color: rgba(77, 255, 0, 0.2);
  font-family: "Courier New", monospace;
  font-size: 2rem;
  margin-top: 50px;
  overflow: hidden;
  white-space: pre-wrap;
`;


// Code Typing Simulation Component
const CodeTyping = () => {
  return (
    <TerminalContainer>
      <Typewriter
        options={{
            strings: [
                `// React Functional Component\nconst Hero = () => {\n  return (\n    <div>\n      <h1>Hello, World!</h1>\n    </div>\n  );\n};\nexport default Hero;`,
              
                `// Fetch API Example\nfetch("https://api.example.com")\n  .then(response => response.json())\n  .then(data => console.log(data));`,
              
                `// Node.js Express Server\nconst express = require("express");\nconst app = express();\napp.get("/", (req, res) => res.send("Hello World!"));\napp.listen(3000, () => console.log("Server running..."));`,
              
                `// React State Management\nimport { useState } from "react";\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>Count: {count}</button>\n  );\n};\nexport default Counter;`,
              
                `// Asynchronous JavaScript (Promise Example)\nconst fetchData = async () => {\n  try {\n    let response = await fetch("https://api.example.com/data");\n    let data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error("Error fetching data:", error);\n  }\n};\nfetchData();`,
              
                `// MongoDB Connection with Mongoose\nconst mongoose = require("mongoose");\nmongoose.connect("mongodb://localhost:27017/mydb", {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n})\n.then(() => console.log("MongoDB Connected"))\n.catch(err => console.error("Connection error", err));`,
              ],                           
          autoStart: true,
          loop: true,
          delay: 0.2,
          deleteSpeed: 2,
        }}
      />
    </TerminalContainer>
  );
};

export default CodeTyping;
