import { ComponentChildren, FunctionComponent } from "preact";

export type ColumnWidth = `${number}px` | `${number}%` | number;

export const TableHeader: FunctionComponent<{
  children: ComponentChildren;
}> = ({ children }) => {
  return (
    <thead class="text-xs uppercase bg-gray-700 text-gray-400">
      {children}
    </thead>
  );
};

export const Th: FunctionComponent<{
  children: ComponentChildren;
  width?: ColumnWidth;
}> = ({ children, width }) => {
  return (
    <th scope="col" class="px-6 py-3" style={{ width }}>
      {children}
    </th>
  );
};

export const Tr: FunctionComponent<{ children: ComponentChildren }> = ({
  children,
}) => {
  return <tr class="border-b bg-gray-800 border-gray-700">{children}</tr>;
};

export const Td: FunctionComponent<{
  children: ComponentChildren;
  isMain?: boolean;
}> = ({ children, isMain }) => {
  return (
    <th
      scope="row"
      class={`px-6 py-4 font-medium ${
        isMain ? "whitespace-nowrap text-white" : ""
      }`}
    >
      {children}
    </th>
  );
};
