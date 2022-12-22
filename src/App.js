import './reset.css';
import { Route, Routes } from "react-router";
import MainPage from "./Components/MainPage";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
            </Routes>
        </div>
    );
}

export default App;
