import React, { useState, useEffect, useRef } from 'react';

import { createMatrix } from '../../helpers/createMatrix';

import Menu from '../shared/Menu/Menu';
import DynamicBackground from '../shared/DynamicBackground/DynamicBackground';
import Introduction from '../shared/Introduction/Introduction';
import List from '../shared/List/List';
import Table from '../shared/Table/Table';
import AdditionalText from '../shared/AdditionalText/AdditionalText';
import Footer from '../shared/Footer/Footer';
import QuestionForm from '../QuestionForm/QuestionForm';

import certificate from '../../assets/images/table/certificate.svg';

import about from '../../assets/about.png';

import './AboutPage.scss';

const AboutPage = () => {
    const [general, setGeneral] = useState();
    const aboutAnimationImageRef = useRef(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/general`)
            .then(response => response.json())
            .then(data => {
                data.list_items.sort((a, b) => a.sequence_number - b.sequence_number);
                data.table_items.sort((a, b) => a.sequence_number - b.sequence_number);

                data.list_items = createMatrix(data.list_items, 2);
                data.table_items = createMatrix(data.table_items, 3);

                setGeneral(data);
            });
    }, []);

    return (
        <>
            <Menu />
            <div className='about-page'>
                <div className='about-animation'>
                    {/* <video poster={about} loop pleload='auto' muted>
                        <source src="/animations/about.mp4" type="video/mp4" />
                    </video> */}
                    <img
                        src={about}
                        ref={aboutAnimationImageRef}
                    />
                    {
                        general && (
                            <Introduction
                                title={general.label}
                                description={general.description}
                            />
                        )
                    }
                </div>
                {
                    general && (
                        <>
                            <DynamicBackground />
                            <List
                                title={general.list.name}
                                items={general.list_items}
                            />
                            <Table
                                title={general.table.name}
                                items={general.table_items}
                                tableImage={certificate}
                            />
                            <AdditionalText
                                text={general.additional_text}
                            />
                            <QuestionForm
                                questionFormButtonValue={general.questionFormButtonValue}
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

export default AboutPage;
