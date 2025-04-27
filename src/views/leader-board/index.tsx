import { fetchLeaderboard, Player } from "../../api";
import { Table } from "../../components/Table";
import { usePolling } from "../../hooks/usePolling";
import { getRankValue } from "../../utils/getRankValue";
import { usePagination } from "../../hooks/usePagination";
import { Navigation } from "../../components/Navigation";
import { columns } from "./model";

const LeaderBoard = () => {
  const players = usePolling(fetchLeaderboard)?.players || [];
  const { data, page, size, total, setPage } = usePagination<Player>(
    players.map((p, i) => ({
      ...p,
      rank: getRankValue(i + 1),
    }))
  );

  return (
    <div className="flex flex-col gap-4 p-4 items-center">
      <h1 className="">Leader Board</h1>

      <Table columns={columns} data={data} />
      <Navigation
        page={page}
        pageSize={size}
        totalItems={total}
        goToPage={setPage}
      />
    </div>
  );
};

export default LeaderBoard;
