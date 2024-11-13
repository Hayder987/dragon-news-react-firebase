import Header from "../components/HomeComponents/header/Header";
import Main from "../components/HomeComponents/main/Main";


const Home = () => {
    return (
        <div>
            <header className="mb-12">
                <Header></Header>
            </header>
            <main className="mb-12">
                <Main></Main>
            </main>
            
        </div>
    );
};

export default Home;