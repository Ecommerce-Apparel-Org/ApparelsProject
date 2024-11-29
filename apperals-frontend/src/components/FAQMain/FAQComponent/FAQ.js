
import React from 'react';
//for use state

import {useState} from "react";
import {motion,AnimatePresence} from "framer-motion"
//for circular icons
import {FaPlusCircle,FaMinusCircle} from "react-icons/fa"
function FAQ() {
    const [activeQuestion, setActiveQuestion] = React.useState(null);
    //questions being asked

    const questions = [
        { id: 1, question: 'How long is shipping?', answer: '1 to 3 days' },
        { id: 2, question: 'Can I track my order?', answer: 'Yes, tracking details will be sent via email once the order is shipped.' },
        { id: 3, question: 'What payment methods do you accept?', answer: 'We accept credit/debit cards, PayPal, and bank transfers.' },
        { id: 4, question: 'What is your return policy?', answer: 'You can return items within 30 days of receiving your order for a full refund or exchange.' }
    ];


    return (
        <div className="w-screen h-screen bg-blck flex justify-center items-center">
            <div className="
            w-[89%] m-auto max-w-[1400px]
            bg-gray-300 p-8 rounded-lg shadow-md

            ">
                <h2 className="text-2xl mb-6 font-semibold">Frequently Asked Questions</h2>
            </div>

        </div>
    );
}

export default FAQ;