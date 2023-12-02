import React from 'react';
import "./ModalLink.css";
import Backdrop from '../Backdrop/Backdrop';
import Box from '../Box/Box';

function ModalLink({ show, close, setUrl, url ,click}) {

    const submitHandler = (e) => {
        e.preventDefault();

        setUrl(url);
        close()
        click()
    };
    return (
        <div>
            <Backdrop show={show} close={close} />

            <form className={`modal-link ${!show ? "modal-link--hidden" : ""}`} onSubmit={submitHandler}>
                <Box>
                    <div className="form-control form-control--modal">
                        <p className="form-control__txt">لینک</p>
                        <input
                            className="form-control__input form-control__link"
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <button className="btn-action btn-item" >ثبت لینک</button>
                </Box>
            </form>
        </div>
    );
}

export default ModalLink;
