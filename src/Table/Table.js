import React from "react";
import classes from './Table.module.css'

export default props => {

    const sortIcon = (propsSort, sortField) => {
        if (sortField === props.sortField) {
            if (propsSort === 'asc') {
                return (<i>▲</i>)
            } else {
                return (<i>▼</i>)
            }
        } else {
            return null
        }
    }

    return (
        <table className={'table ' + classes.tableStyle}>
            <thead>
            <tr>
                <th onClick={props.onSort.bind(null, 'id')}>
                    ID {sortIcon(props.sort, 'id')}
                </th>
                <th onClick={props.onSort.bind(null, 'firstName')}>
                    First Name {sortIcon(props.sort, 'firstName')}
                </th>
                <th onClick={props.onSort.bind(null, 'lastName')}>
                    Last Name {sortIcon(props.sort, 'lastName')}
                </th>
                <th onClick={props.onSort.bind(null, 'email')}>
                    Email {sortIcon(props.sort, 'email')}
                </th>
                <th onClick={props.onSort.bind(null, 'phone')}>
                    Phone {sortIcon(props.sort, 'phone')}
                </th>
            </tr>
            </thead>
            <tbody>
                {props.data && props.data.map( item => (
                    <tr key={item.id + item.phone } onClick={props.onRowSelect.bind(null, item)}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

