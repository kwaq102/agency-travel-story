import React from 'react';
import '../styles/Burger.scss'


const Burger = (props) => {
    return (
        <>
            <div className="burger" onClick={props.handleClickBurger}>
                <i className={props.showBurger ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </>
    );

}

export default Burger;
