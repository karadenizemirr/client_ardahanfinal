import { useMemo } from "react"
import { useSortBy, useTable, useGlobalFilter } from "react-table"
import {GoArrowUp, GoArrowDown} from 'react-icons/go'
import {Filter} from './Filter'

const Table = ({DATA, COLUMNS, TITLE}) => {

    const data = useMemo(() => DATA, [])
    const columns = useMemo(() => COLUMNS, [])

    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,state,setGlobalFilter
    } = useTable({data, columns}, useGlobalFilter, useSortBy)

    const {globalFilter} = state

    return (
        <div className='p-10' >
            <div className="title mb-4 text-center">
                <h1 className="font-poppinsBold text-xl uppercase ">
                    {TITLE}
                </h1>
            </div>
            <div className="search">
                <Filter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>
            <div className="overflow-x-auto font-poppinsLight ">
                <table className="w-full text-sm text-center border-2 border-black" {...getTableProps()} >
                    <thead className="text-sm text-white uppercase  bg-primary border-2 border-black">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>

                            {headerGroup.headers.map(column => (
                                <th className="px-6 py-3 "
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                >
                                    {column.render('Header')}
                                    <span className="text-xl" >
                                        {
                                            column.isSorted ? (column.isSortedDesc ? <GoArrowDown />: <GoArrowUp />): ''
                                        }
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody className="border-2 border-black" {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (

                            <tr {...row.getRowProps()} className="bg-gray-50 border-b text-black border-2 border-black" >

                                {row.cells.map(cell => {
                                    return (
                                        <>

                                            <td className="px-6 py-4"
                                                {...cell.getCellProps()}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        </>
                                    )
                                })}
                            </tr>
                        )

                    })}

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Table