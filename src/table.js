import React from 'react';

export default props => (
    <table className="table">
        <thead>
            <tr>
                <td>ID</td>
                <td>Username</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {props.data.map(item =>(
                <tr key={item.id}>
                    <td>{item.user}</td>
                    <td>{item.rating}</td>
                    <td>{item.disable}</td>
                </tr>
            ))}
        </tbody>

    </table>
)

