import { FunctionComponent } from "preact";
import { ColumnWidth, TableHeader, Td, Th, Tr } from "./components";
import { memo } from "preact/compat";
import { formatToUSD } from "../../utils/formatToUSD";

export enum ColumnType {
  Numeric = "Numeric",
  String = "String",
  Currency = "Currency",
}

export type Column = {
  name: string;
  key: string;
  isMain?: boolean;
  type?: ColumnType;
  width?: ColumnWidth;
};

interface TableProps {
  columns?: Column[];
  data?: Record<string, any>[];
}

const renderField = (data: Record<string, any>, column: Column) => {
  const value = data[column.key];

  switch (column.type) {
    case ColumnType.Numeric:
      return value.toLocaleString();
    case ColumnType.Currency:
      return formatToUSD(value);
    default:
      return value;
  }
};

export const Table: FunctionComponent<TableProps> = memo((props) => {
  const { columns, data } = props;
  console.log("render");
  return (
    <div class="overflow-x-auto w-full">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHeader>
          <tr>
            {columns?.map((column) => (
              <Th key={column.key} width={column.width}>
                {column.name}
              </Th>
            ))}
          </tr>
        </TableHeader>
        <tbody>
          {data?.map((item, index) => (
            <Tr key={index}>
              {columns?.map((column) => (
                <Td key={column.key} isMain={column.isMain}>
                  {renderField(item, column)}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
