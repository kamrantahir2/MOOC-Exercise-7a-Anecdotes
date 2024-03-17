import { useParams } from "react-router-dom";

const Anecdote = ({ anecdotes }) => {
  const { id } = useParams();
  const anecdote = anecdotes.find((a) => a.id === Number(id));
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <div>{anecdote.author}</div>
      <div>
        <a href={anecdote.info}>{anecdote.info}</a>
      </div>
      <div>Votes: {anecdote.votes}</div>
    </div>
  );
};

export default Anecdote;
