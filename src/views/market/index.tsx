import { Table } from "../../components/Table";
import { columns, useMarket } from "./model";

const Market = () => {
  const { data } = useMarket();

  return (
    <div className="flex flex-col gap-3 items-center w-full">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Market;
