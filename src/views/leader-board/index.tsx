import { fetchLeaderboard } from "../../api";
import { usePolling } from "../../hooks/usePolling";

const LeaderBoard = () => {
  const players = usePolling(fetchLeaderboard)?.players;

  console.log("players", players);
  return (
    <div>
      <h1 className="">Leader Board</h1>
      <ul>
        {players?.map((player) => (
          <li key={player.username} className="flex gap-8">
            <span>{player.username}</span>
            <span>{player.level}</span>
            <span>{player.xp}</span>
            <span>{player.gold}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderBoard;
