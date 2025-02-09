import { useState } from "react"
import PlusIcon from "./PlusIcon"
import MinusIcon from "./MinusIcon"
const FaqItem = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false);
    

    return (
    <div className="faq-item">
        <div className="question-container">
            <div className="question">{question}</div>
            <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen ? "Collapse answer" : "Expand answer"}>
                {!isOpen ? <PlusIcon /> : <MinusIcon />}
            </button>
        </div>
        
        <div className={`answer-container ${isOpen ? 'open' : ''}`}>
            <p className="answer">{answer}</p>
            <div className="divider"></div>
        </div>
    </div>
  )
}

export default FaqItem
