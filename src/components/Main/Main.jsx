import React, { useState } from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

export default function Main() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = event => {
    // const name = event.target.name;
    switch (event) {
      case "good":
        setGood(prev => prev + 1);
        break;
      case "neutral":
        setNeutral(prev => prev + 1);
        break;
      case "bad":
        setBad(prev => prev + 1);
        break;
      default:
        return false;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    if (+countTotalFeedback() === 0) {
      return 0;
    }
    return parseInt((good / +countTotalFeedback()) * 100);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Section title={"Please leave feedback"} />
        <FeedbackOptions
          leaveFeedback={leaveFeedback}
          options={["good", "neutral", "bad"]}
        />
        {countTotalFeedback() ? (
          <Statistics
            title={"Statistics"}
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    </>
  );
}
