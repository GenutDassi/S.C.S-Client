import { useParams } from "react-router-dom";


function Home() {
    const {userName}=useParams();
const {userPassword}=useParams();
    return (
        <>
            <h1>whelcome {userName}! pass:{userPassword}</h1>
        </>
    )
} export default Home;