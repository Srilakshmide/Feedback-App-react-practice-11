import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedback: false}

  onClickEmoji = () => {
    this.setState({feedback: true})
  }

  feedbackForm = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="emoji-container">
        <h1 className="heading">
          How satisfied are you with our <br /> customer support performance?
        </h1>
        <ul className="list-container">
          {emojis.map(each => (
            <li key={each.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img src={each.imageUrl} alt={each.name} className="emoji" />
                <p className="emoji-name">{each.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYouFeedbackForm = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankyou-head">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {feedback} = this.state

    return (
      <div className="bg-container">
        <div className="feedback-container">
          {feedback ? this.thankYouFeedbackForm() : this.feedbackForm()}
        </div>
      </div>
    )
  }
}

export default Feedback
