import React, {Component} from 'react'
import TableKeToan from './KeToan/TableKeToan'
import TableKinhDoanh from './KinhDoanh/TableKinhDoanh'
import TableTongHop from './TongHop/TableTongHop'
export default function TablePhongBanStaff() {
    return (
        <div>
            <TableKeToan/>
            <TableKinhDoanh/>
            <TableTongHop/>
        </div>
    )
}
