import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Popupwindow = () => {
  return (
    <div>
         <div>
            <h4>Popup - GeeksforGeeks</h4>
            <Popup trigger=
                {<button> Click to open modal </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Welcome to GFG!!!
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    </div>
  )
}

export default Popupwindow;