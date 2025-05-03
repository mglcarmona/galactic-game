import { Table } from "../../components/Table";
import { columns, useMarket } from "./model";

const Market = () => {
  const { data } = useMarket();

  return (
    <div className="flex flex-col items-center w-full">
      <div className="shadow-2xl w-full">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Market;
