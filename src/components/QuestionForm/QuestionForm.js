import React from 'react';
import InputMask from 'react-input-mask'

import { MySwal, showModalWindow } from '../shared/ModalWindow/ModalWindow';

import './QuestionForm.scss';

const СourseRegistrationForm = ({ questionFormButtonValue }) => {
    return (
        <button
            className="btn-enter"
            onClick={() => showModalWindow(
                (
                    <form className='course-registration-form'>
                        <input name="name" type="text" className="swal2-input" placeholder="Ім'я *" />
                        <InputMask name="telephone" mask="+(3\80) 99 99 99 999" className="swal2-input" placeholder="Телефон *" />
                        <textarea name="question" className="swal2-textarea" placeholder="Ваше запитання *"></textarea>
                    </form>
                ),
                null,
                {
                    preConfirm: () => {
                        // To Do: This may be converted to an async 
                        const formElements = [...document.querySelector(".course-registration-form").elements];
                        let isValidForm = true;
                        let formFields = {};

                        for (let i = 0; i < formElements.length; i++) {
                            if (!formElements[i].value) {
                                MySwal.showValidationMessage(`Поле&nbsp;<b>${formElements[i].placeholder.slice(0, -2)}</b>&nbsp;є обов'язковим.`);
                                isValidForm = false;
                                break;
                            } else if (formElements[i].name === 'telephone' && formElements[i].value.includes('_')) {
                                MySwal.showValidationMessage(`Поле&nbsp;<b>${formElements[i].placeholder.slice(0, -2)}</b>&nbsp;містить не всі цифри, перевірте ще раз.`);
                                isValidForm = false;
                                break;
                            }

                            formFields[formElements[i].name] = formElements[i].value;
                        }
                        
                        if (isValidForm) {
                            return fetch(`${process.env.REACT_APP_API_URL}/questionForm`, {
                                method: 'POST',
                                body: JSON.stringify(formFields),
                                headers: {
                                    'Content-type': 'application/json'
                                }
                            })
                                .then(res => {
                                    if (!res.ok) {
                                        throw new Error(`[${res.status}]: ${res.statusText}`);
                                    }
                                    return res.ok;
                                })
                                .catch(err => {
                                    showModalWindow(
                                        null,
                                        null,
                                        {
                                            icon: 'error',
                                            title: 'Щось пішло не так, будь ласка, спробуйте ще раз.',
                                            showConfirmButton: false
                                        }
                                    );
                                });
                        }
                    },
                    showLoaderOnConfirm: true
                },
                (result) => {
                    if (result.isConfirmed) {
                        if (result.value) {
                            showModalWindow(
                                null,
                                null,
                                {
                                    icon: 'success',
                                    title: 'Ваш запит було успішно відправлено.',
                                    showConfirmButton: false
                                }
                            );
                        }
                    }
                }
            )}
        >{questionFormButtonValue}</button>
    );
}

export default СourseRegistrationForm;
