import { Table } from "../../components/Table";
import { Pagination } from "../../components/Pagination";
import { columns, usePlayers } from "./model";

const LeaderBoard = () => {
  const { data, page, size, total, setPage } = usePlayers();

  return (
    <div className="flex flex-col gap-3 items-center w-full">
      <Table columns={columns} data={data} />
      <Pagination
        page={page}
        pageSize={size}
        totalItems={total}
        goToPage={setPage}
      />
    </div>
  );
};

export default LeaderBoard;
