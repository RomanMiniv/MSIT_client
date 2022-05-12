import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { createMatrix } from '../../../helpers/createMatrix';

import Menu from '../../shared/Menu/Menu';
import DynamicBackground from '../../shared/DynamicBackground/DynamicBackground';
import Introduction from '../../shared/Introduction/Introduction';
import List from '../../shared/List/List';
import Table from '../../shared/Table/Table';
import TeacherInfo from '../../shared/TeacherInfo/TeacherInfo';
import AdditionalText from '../../shared/AdditionalText/AdditionalText';
import Footer from '../../shared/Footer/Footer';

import timeTable from '../../../assets/images/table/clipboard-list-outline.svg';

import about from '../../../assets/about.png';

const PythonPage = () => {
    const location = useLocation();
    const courseName = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

    const [course, setCourse] = useState();
    const aboutAnimationImageRef = useRef(null);
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/course/${courseName}`)
            .then(response => response.json())
            .then(data => {
                data.list_items.sort((a, b) => a.sequence_number - b.sequence_number);
                data.table_items.sort((a, b) => a.sequence_number - b.sequence_number);

                data.list_items = createMatrix(data.list_items, 2);
                data.table_items = createMatrix(data.table_items, 3);

                setCourse(data);
            });
    }, []);

    return (
        <>
            <Menu />
            <div className='page'>
                <div className='about-animation'>
                    {/* <video autoPlay loop pleload='auto' muted>
                        <source src="/animations/about.mp4" type="video/mp4" />
                    </video> */}
                    <img
                        src={about}
                        ref={aboutAnimationImageRef}
                    />
                    {
                        course && (
                            <Introduction
                                title={course.label}
                                description={course.description}
                            />
                        )
                    }
                </div>
                {
                    course && (
                        <>
                            <DynamicBackground />
                            <List
                                title={course.list.name}
                                items={course.list_items}
                            />
                            <Table
                                title={course.table.name}
                                items={course.table_items}
                                tableImage={timeTable}
                            />
                            <TeacherInfo
                                name={course.teacher.name}
                                description={course.teacher.description}
                                avatar={course.teacher.avatar}
                            />
                            <AdditionalText
                                text={course.additional_text}
                            />
                            <Footer
                                aboutAnimationImageRef={aboutAnimationImageRef}
                            />
                        </>
                    )
                }
            </div>
        </>
    );
}

export default PythonPage;
