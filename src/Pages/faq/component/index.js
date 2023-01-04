import React, { useState } from 'react'
import { CardWrapper } from './style'

function FaqCard({ detail }) {

    const [toggle, setToggle] = useState(false);
    const toggleHandle = () => {
        setToggle(!toggle);
    };

    return (
        <CardWrapper>
            <div >
                <div className='headbox'>
                    <h1>{detail.ques}</h1>
                    <p id='sideIcon' onClick={toggleHandle}>+</p>
                </div>
                <div className={'ansBox'}>

                    {toggle &&

                        <p>{detail.ans}</p>

                    }
                </div>

            </div>
        </CardWrapper>
    )
}

export default FaqCard