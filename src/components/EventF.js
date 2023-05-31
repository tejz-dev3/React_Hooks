import React from 'react';

function EventF () {
    const eventHandler = () => {
        console.log('button Clicked')
    }
    return(
        <div>
            <button onClick={eventHandler}>Click</button>  
        </div>
    )
}

export default EventF