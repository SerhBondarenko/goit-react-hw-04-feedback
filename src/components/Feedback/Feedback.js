import { useState} from 'react';
import s from '../Feedback/FeedbackStyles.module.css';
import PropTypes from 'prop-types';
import Section from '../Feedback/FeedbackSection';
import FeedbackOptions from '../Feedback/FeedbackOptions';
import Statistics from '../Feedback/FeedbackStatistics';
import FeedbackEmpty from '../Feedback/FeedbackEmpty';


export default function Feedback() { 

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback() === 0
      ? "0"
      : Math.round((good /countTotalFeedback()) * 100);

  const onLeaveFeedback = (e) => {

    switch (e) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      
      case 'bad':
        setBad((prevState) => prevState + 1);
        break;
      default: return;
    }
  };

  return (
    <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback() === 0 ? (
          <FeedbackEmpty title={'No feedback given'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>)

};

Feedback.propTypes = {
  good: PropTypes.number,
  neunral: PropTypes.number,
  bad: PropTypes.number,
};





//======================================
//======================================
/*
class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  static propTypes = {
    good: PropTypes.number,
    neunral: PropTypes.number,
    bad: PropTypes.number,
  };
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.neutral,
  };


  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e]: prevState[e] + 1,
    }));
  };

  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  
  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() === 0
      ? '0'
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);


  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() === 0 ? (
          <FeedbackEmpty title={'No feedback given'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default Feedback;
*/