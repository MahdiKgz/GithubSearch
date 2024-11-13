import { Repository } from "../features/repositorySlice";

function usePaginate(
  list: Repository[],
  itemsPerPage: number = 8,
  currentPage: number
): [Repository[], number] {
  const endIndex: number = itemsPerPage * currentPage;
  const startIndex: number = endIndex - itemsPerPage;
  const paginatedItems: Repository[] = list.slice(startIndex, endIndex);
  const paginationButtonsCount: number = Math.ceil(list.length / itemsPerPage);
  return [paginatedItems, paginationButtonsCount];
}

export { usePaginate };
