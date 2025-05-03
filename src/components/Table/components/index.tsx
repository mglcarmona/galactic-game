import { ComponentChildren, FunctionComponent } from "preact";

export type ColumnWidth = `${number}px` | `${number}%` | number;

export const TableHeader: FunctionComponent<{
  children: ComponentChildren;
}> = ({ children }) => {
  return (
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      {children}
    </thead>
  );
};

export const Th: FunctionComponent<{
  children: ComponentChildren;
  width?: ColumnWidth;
}> = ({ children, width }) => {
  return (
    <th scope="col" class="px-6 py-3" style={{ minWidth: width, width }}>
      {children}
    </th>
  );
};

export const Tr: FunctionComponent<{ children: ComponentChildren }> = ({
  children,
}) => {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
      {children}
    </tr>
  );
};

export const Td: FunctionComponent<{
  children: ComponentChildren;
  isMain?: boolean;
}> = ({ children, isMain }) => {
  return (
    <th
      scope="row"
      class={`px-6 py-4 font-medium ${
        isMain ? "text-gray-900 whitespace-nowrap dark:text-white" : ""
      }`}
    >
      {children}
    </th>
  );
};
