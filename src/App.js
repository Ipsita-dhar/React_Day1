import React from "react";
import "./App.css";
import Button from "./Button"

const App=()=>{
  return(
    <div>
        <h1>Hello Everyone !</h1>
        <h2>This is my Day 1 of learning React.JS</h2>
        <div class="queries">
          <div class="one">
            <h3>How are you?</h3>
            <Button buttonText="Great"/>
            <Button buttonText="Fine"/>
            <Button buttonText="Not Okay"/>
          </div>

          <div class="two">
            <h3>How many members in your family?</h3>
            <Button buttonText="2"/>
            <Button buttonText="3"/>
            <Button buttonText="More"/>
          </div>

          <div class="three">
            <h3>What are your hobbies?</h3>
            <Button buttonText="Reading"/>
            <Button buttonText="Dancing"/>
            <Button buttonText="Coding"/>
          </div>
        </div>
        
    </div>
  )
}

export default App