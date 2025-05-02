import { ComponentChildren, FunctionComponent } from "preact";

interface ListItemProps {
  children: ComponentChildren;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  className?: string;
}

export const ListItem: FunctionComponent<ListItemProps> = ({
  children,
  onClick,
  isActive = false,
  isDisabled = false,
  className = "",
}) => {
  const baseClasses =
    "flex items-center justify-center px-2 w-10 h-10 leading-tight border cursor-pointer";
  const activeClasses =
    "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-main-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
  const defaultClasses =
    "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const disabledClasses = "cursor-not-allowed opacity-50";

  return (
    <li>
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`${baseClasses} ${
          isActive ? activeClasses : defaultClasses
        } ${isDisabled ? disabledClasses : ""} ${className}`}
      >
        {children}
      </button>
    </li>
  );
};
