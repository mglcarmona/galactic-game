import { Column, ColumnType } from "../../components/Table";

export const columns: Column[] = [
  { name: "Rank", key: "rank", isMain: true, width: "40px" },
  { name: "Player", key: "username", isMain: true },
  { name: "Level", key: "level", type: ColumnType.Numeric },
  { name: "Experience", key: "xp", type: ColumnType.Numeric },
  { name: "Gold", key: "gold", type: ColumnType.Numeric },
];
