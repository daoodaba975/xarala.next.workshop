import { useState } from "react"

// Exemple d'utilisation de state dans un composant

const Xarala = () => {

    const [score, setScore] = useState(0);
    const newScore = () => setScore ( score + 1 );

    return (
        <div>
            <h1>Vous avez appuyer {score} fois</h1>
            <button onClick={newScore}>Appuyer</button>
        </div>
        
    )
}

export default Xarala