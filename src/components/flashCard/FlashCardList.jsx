import {useState} from "react";
import { flashCardData} from "../../data/flashCardData"
import FlashCard from "./FlashCard";

import {
    CardGrid,

} from "./FlashCard.Style";


const FlashCardList = () => {

    const [flashcards, setFlashcards] = useState(flashCardData)

    return (
        <>
            <CardGrid className="grid">
                {flashcards.map((flashcard) => {
                    return <FlashCard className="hijo" key={flashcard.id} flashcard={flashcard} />
                })}   
            </CardGrid>
        </>
    )
}

export default FlashCardList
