import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Bio from "./components/Bio";
import Hire from "./components/Hire";
import Repositories from "./components/Repositories";
import Footer from "./components/Footer";

function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  function handleFollow() {
    setFollowers(followers + 1);
  }

  function handleAddRate() {
    setRate(rate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
    setPortfolioStars(0);
    setTodoStars(0);
    setDotfilesStars(0);
  }

  function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />
      <Profile
        followers={followers}
        rate={rate}
        onFollow={handleFollow}
        onAddRate={handleAddRate}
        onReset={handleReset}
      />
      <Bio />
      <Hire rate={rate} onAddRate={handleAddRate} />
      <Repositories
        portfolioStars={portfolioStars}
        todoStars={todoStars}
        dotfilesStars={dotfilesStars}
        onStarPortfolio={handleStarPortfolio}
        onStarTodo={handleStarTodo}
        onStarDotfiles={handleStarDotfiles}
      />
      <Footer />
    </div>
  );
}

export default App;