import React from 'react';
import { Link } from 'react-router-dom';

const indexList = [
    {id:1, title:'카운터 예제', path: '/counter'},
    {id:2, title:'인터벌 예제', path: '/timeInterval'},
    {id:3, title:'연락처 예제', path: '/contacts'}
];

const IndexList = () => {
    return (
        <div>
            <h1>목차</h1>
            <ol>
                {
                    indexList.map(d => {
                        return (
                            <li key={d.id}>
                                <Link to={d.path} >  {d.title}</Link>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    );
};

export default IndexList;