import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    // const navigate = useNavigate();
    // const Handle = () => {
    //     alert("About Page render")
    //     navigate('/about')
    // }
    return (
        <div>
            <h1>Home</h1>
            <p>
                Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.Engraving of Marcus Tullius Cicero CICEROHEDONIST ROOTS
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.” As Cicero would put it, “Um, not so fast.”
                The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
            </p>
            <Link to='/about' state={{
                name:'mahi',
                age:'21'
            }}>AboutUs</Link>
            
        </div>
    )
}
export default Home