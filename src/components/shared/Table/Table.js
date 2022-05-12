import React from 'react';

import './Table.scss';

const AOSAnimationNames = ['zoom-in-left', 'zoom-in', 'zoom-in-right']

const getAOSAnimationNameForTable = (columnIndex) => {
    const dataAOSTableIndex = Number(sessionStorage.getItem('dataAOSTableIndex'));

    sessionStorage.setItem('dataAOSTableIndex', columnIndex !== 2 ? dataAOSTableIndex + 1 : 0);
    
    return dataAOSTableIndex;
}

const getAOSAnimationDelayForTable = (columnIndex) => {
    switch (columnIndex) {
        case 1:
            return 950;
        case 2:
            return 1900;
    }
    
    return 0;
}

const Table = ({ title, items, tableImage }) => {
    sessionStorage.setItem('dataAOSTableIndex', 0);

    return (
        <section className='table'>
            <div className='head'>
                <img src={tableImage} />
                <span className='title'>{title}</span>
            </div>
            <div className='body'>
                <table className='items'>
                    <tbody>
                        {
                            items.map((rows, rowIndex) =>
                                <tr key={rowIndex}>
                                    {
                                        rows.map((item, columnIndex) =>
                                            <td className='item' key={columnIndex}
                                                data-aos={AOSAnimationNames[
                                                    getAOSAnimationNameForTable(columnIndex)
                                                ]}
                                                data-aos-delay={getAOSAnimationDelayForTable(columnIndex)}
                                                data-aos-easing='ease-out-cubic'
                                            >
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
            </div>
        </section>
    );
}

export default Table;
