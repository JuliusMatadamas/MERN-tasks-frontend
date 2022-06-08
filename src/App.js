import Navbar from "./layouts/Navbar";
import './App.css';

function App() {
    return (
        <main className="flex">
            <Navbar></Navbar>
            <section id="content" className={`p-7`}>
                <h1 className={`font-semibold text-2xl`}>Content page</h1>
            </section>
        </main>
    );
}

export default App;
