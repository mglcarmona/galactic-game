import { FunctionComponent } from "preact";
import { ListItem } from "./components";
import { getPaginationRange } from "../../utils/getPaginationRange";

interface PaginationProps {
  page: number;
  totalItems: number;
  pageSize: number;
  goToPage: (page: number) => void;
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  page,
  totalItems,
  pageSize,
  goToPage,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const prev = () => {
    if (page > 1) {
      goToPage(page - 1);
    }
  };
  const next = () => {
    if (page < totalPages) {
      goToPage(page + 1);
    }
  };

  return (
    <nav>
      <ul className="inline-flex -space-x-px text-sm">
        <ListItem
          onClick={prev}
          isDisabled={page === 1}
          className="rounded-s-lg border-e-0"
        >
          {"<"}
        </ListItem>
        {getPaginationRange(page, totalPages).map((item, idx) =>
          typeof item === "number" ? (
            <ListItem
              key={item}
              onClick={() => goToPage(item)}
              isActive={page === item}
            >
              {item}
            </ListItem>
          ) : (
            <li key={`ellipsis-${idx}`} className="px-2 py-1 text-white">
              ...
            </li>
          )
        )}
        <ListItem
          onClick={next}
          isDisabled={page === totalPages}
          className="rounded-e-lg"
        >
          {">"}
        </ListItem>
      </ul>
    </nav>
  );
};
