import React from "react";
import RepoCard from "./RepoCard";

export default function Repositories({
  portfolioStars,
  todoStars,
  dotfilesStars,
  onStarPortfolio,
  onStarTodo,
  onStarDotfiles,
}) {
  return (
    <main className="grid grid-cols-3 gap-8 px-20 pt-8">
      <RepoCard
        title="portfolio"
        description="My personal page built with React."
        language="JavaScript"
        commits="48"
        stars={portfolioStars}
        onStar={onStarPortfolio}
      />
      <RepoCard
        title="todo-api"
        description="A small REST API for a to-do list."
        language="Java"
        commits="31"
        stars={todoStars}
        onStar={onStarTodo}
      />
      <RepoCard
        title="dotfiles"
        description="My terminal and editor settings."
        language="Shell"
        commits="12"
        stars={dotfilesStars}
        onStar={onStarDotfiles}
      />
    </main>
  );
}