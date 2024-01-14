import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChatBot from "react-simple-chatbot";
import { Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  const stepsOld = [
    {
      id: "1",
      message: "whats is your name!",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: `hi{previousValue}, nice to meet you`,
      end: true,
    },
  ];

  return (
    <>
      <div>
        <Typography>Chat-bot Demo</Typography>
        <div>
          <ChatBot
            steps={[
              {
                id: "1",
                message: "whats is your name!",
                trigger: "2",
              },
              {
                id: "2",
                user: true, 
                trigger: "3",
              },
              {
                id: "3",
                message: `hi{previousValue}, nice to meet you`,
                end: true,
              },
            ]}
            floating={true}
          />
        </div>
      </div>
    </>
  );
}

export default App;
