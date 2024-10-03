import {
    AiOutlineSortAscending,
    AiOutlineSortDescending,
  } from "react-icons/ai";
  import {
    Column,
    usePagination,
    useSortBy,
    useTable,
    TableOptions,
  } from "react-table";
  
  function TableHOC<T extends object>(
    columns: Column<T>[],
    data: T[],
    containerClassname: string,
    heading: string,
    showPagination: boolean = false
  ) {
    return function HOC() {
      const options: TableOptions<T> = {
        columns,
        data,
        initialState: {
          pageSize: 6,
        },
      };
  
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        pageCount,
        state: { pageIndex },
        previousPage,
        canNextPage,
        canPreviousPage,
      } = useTable(options, useSortBy, usePagination);
  
      return (
        <div className={` ${containerClassname}  bg-white w-full p-5` }>
          <h2 className="text-2xl opacity-60 uppercase text-center mb-5">{heading}</h2>
  
          <table className="table w-full" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr className="mb-2" {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                      {column.isSorted && (
                        <span>
                          {""}
                          {column.isSortedDesc ? (
                            <AiOutlineSortDescending />
                          ) : (
                            <AiOutlineSortAscending />
                          )}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="" {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
  
                return (
                  <tr className="" {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td className="text-center p-3" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
  
          {showPagination && (
            <div className="table-pagination">
              <button disabled={!canPreviousPage} onClick={previousPage}>
                Prev
              </button>
              <span>{`${pageIndex + 1} of ${pageCount}`}</span>
              <button disabled={!canNextPage} onClick={nextPage}>
                Next
              </button>
            </div>
          )}
        </div>
      );
    };
  }
  
  export default TableHOC;