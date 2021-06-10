import {useState} from "react";
import {
    Card,
 } from "./FlashCard.Style";
 import { Button } from "../Button";


const FlashCard = ({flashcard}) => {

    const [flip, setFlip] = useState(true);

    return (
        <Card key={flashcard.id}
            className={flip ? 'flip' : ''}
            onClick={() => setFlip(!flip)}
        >
            { flip 
            
            ? (
                <div className="front">
                    <img src={flashcard.image} alt=""/>
                    <h1>{flashcard.question}</h1>
                    <div className="flashcard-options">
                        {flashcard.options.map((option, i) =>{
                            return (
                                <div id={`option-${i}`} className="flascard-option">
                                    {option}
                                </div>
                            )
                        } )}
                    </div>
                </div>
            )
            : (
                <div className="back">
                    <p>{flashcard.anwser}</p>
                </div>
            )
            }
            <Button to={flashcard.path} primary="true">{ flip ? "Ver +" : "Volver" } </Button>
        </Card>
    )
}

export default FlashCard
