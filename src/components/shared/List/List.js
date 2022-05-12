import React from 'react';

import './List.scss';

const AOSAnimationNames = ['flip-up', 'flip-down', 'flip-left', 'flip-right'];

const getAOSAnimationNameForList = (rowIndex) => {
    if (rowIndex !== 0 && rowIndex % 2 === 0) {
        sessionStorage.setItem('dataAOSListIndex', 0);            
    }
    
    const dataAOSListIndex = Number(sessionStorage.getItem('dataAOSListIndex'));
    sessionStorage.setItem('dataAOSListIndex', dataAOSListIndex + 1);
    
    return dataAOSListIndex;
}

const List = ({ title, items }) => {
    sessionStorage.setItem('dataAOSListIndex', 0);

    return (
        <section className='list'>
            <h1>{title}</h1>
            <table className='items'>
                <tbody>
                    {
                        items.map((rows, rowIndex) =>
                            <tr key={rowIndex}>
                                {
                                    rows.map((item, columnIndex) =>
                                        <td
                                            className='item'
                                            key={columnIndex}
                                            data-aos={AOSAnimationNames[
                                                getAOSAnimationNameForList(rowIndex)
                                            ]}
                                            data-aos-delay={columnIndex % 2 ? 950 : 0}
                                            data-aos-easing='ease-out-cubic'
                                        >
                                            <span className='index'>{item.sequence_number}</span>
                                            <div className='content'>
                                                <span className='item-title' dangerouslySetInnerHTML={{ __html: item.title }}></span>
                                                <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                            </div>
                                        </td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </section>
    );
}

export default List;
