import React from 'react';
import faq from '../assets/images/faq.png'
import Accordion from './Accordion';

const FAQ = () => {
    return (
        <>
            <div className='text-center py-8 '>
                <h2 className='custom-font text-2xl font-bold pb-2'>Frequently Asked Questions</h2>
                <p className='w-4/5 lg:w-3/5 m-auto text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-6'>
                <div>
                    <div>
                        <Accordion
                            title="Sed do eiusmod tempor incididunt ut labore et dolore"
                            content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            isOpenByDefault={true}
                        />
                        <Accordion
                            title="Accordion Title 2"
                            content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            isOpenByDefault={false}
                        />
                        <Accordion
                            title="Accordion Title 3"
                            content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            isOpenByDefault={false}
                        />
                        <Accordion
                            title="Accordion Title 4"
                            content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            isOpenByDefault={false}
                        />
                        <Accordion
                            title="Accordion Title 5"
                            content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            isOpenByDefault={false}
                        />
                    </div>
                </div>

                <div>
                    <img src={faq} className=' object-cover' alt='' />
                </div>
            </div>

        </>
    );
};

export default FAQ;