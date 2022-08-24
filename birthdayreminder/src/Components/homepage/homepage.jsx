import React from "react";
import logicFunction from "../../data/data";

const Homepage = () => {
    let today = []
    let tommrow = []
    const checkBirthday = async (event) => {
        let Birthday = logicFunction.checkbirthday()
        today = Birthday[0]
        tommrow = Birthday[1]
      };
    
    
    
    
    return (
        <div className="Home">
            <h1>Birthday Reminder</h1>
            <button onClick={checkBirthday}>Check Birthdays</button>
            <h3>{ today }</h3>
            <h3>{tommrow}</h3>
        </div>
    )
}

export default Homepage;