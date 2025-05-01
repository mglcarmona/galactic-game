import { useEffect } from "preact/hooks";
import { fetchItems, Item, ItemFields } from "../../api";
import { Column, ColumnType } from "../../components/Table";
import { useLocalStorage } from "../../hooks/useLocalstorage";
import { usePolling } from "../../hooks/usePolling";

const POLLING_INTERVAL = 60000;
export const columns: Column[] = [
  { name: "Name", key: ItemFields.NAME, isMain: true },
  { name: "Type", key: ItemFields.TYPE },
  { name: "Description", key: ItemFields.DESCRIPTION },
  { name: "Cost", key: ItemFields.COST, type: ColumnType.Currency },
];

export const useMarket = () => {
  const [storedItems, setStoredItems] = useLocalStorage<Item[]>("market", []);
  const data = usePolling(fetchItems, POLLING_INTERVAL)?.items || storedItems;

  useEffect(() => {
    setStoredItems(data);
  }, [data]);

  return { data };
};
