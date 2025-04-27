import { FunctionComponent } from "preact";
import { ListItem } from "./components";

interface NavigationProps {
  page: number;
  totalItems: number;
  pageSize: number;
  goToPage: (page: number) => void;
}

export const Navigation: FunctionComponent<NavigationProps> = ({
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
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <ListItem
          onClick={prev}
          isDisabled={page === 1}
          className="rounded-s-lg border-e-0"
        >
          Previous
        </ListItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <ListItem
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            isActive={page === index + 1}
          >
            {index + 1}
          </ListItem>
        ))}
        <ListItem
          onClick={next}
          isDisabled={page === totalPages}
          className="rounded-e-lg"
        >
          Next
        </ListItem>
      </ul>
    </nav>
  );
};
