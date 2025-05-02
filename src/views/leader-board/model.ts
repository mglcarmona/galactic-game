import { useEffect, useMemo } from "preact/hooks";
import { fetchLeaderboard, Player, PlayerFields } from "../../api";
import { Column, ColumnType } from "../../components/Table";
import { useLocalStorage } from "../../hooks/useLocalstorage";
import { usePagination } from "../../hooks/usePagination";
import { usePolling } from "../../hooks/usePolling";
import { getRankValue } from "../../utils/getRankValue";

export const columns: Column[] = [
  { name: "Rank", key: PlayerFields.RANK, isMain: true, width: "40px" },
  { name: "Player", key: PlayerFields.USERNAME, isMain: true },
  {
    name: "Level",
    key: PlayerFields.LEVEL,
    type: ColumnType.Numeric,
    width: "15%",
    render(data) {
      return `${data[PlayerFields.LEVEL]} ${data[PlayerFields.EMOJI]}`;
    },
  },
  {
    name: "Experience",
    key: PlayerFields.XP,
    type: ColumnType.Numeric,
    width: "15%",
  },
  {
    name: "Gold",
    key: PlayerFields.GOLD,
    type: ColumnType.Currency,
    width: "15%",
  },
];

export const usePlayers = () => {
  const [storedPlayers, setStoradPlayers] = useLocalStorage<Player[]>(
    "leaderboard",
    []
  );
  const players = usePolling(fetchLeaderboard)?.players || storedPlayers;
  const playersWithRank = useMemo(() => {
    return players.map((p, i) => ({
      ...p,
      rank: getRankValue(i + 1),
    }));
  }, [players]);

  useEffect(() => {
    setStoradPlayers(players);
  }, [players]);

  return usePagination<Player>(playersWithRank);
};
