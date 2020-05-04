import React, { Component } from 'react';
import { Link } from 'react-scroll';
import ScrollEvent from 'react-onscroll';
import '../styles/Arrow.scss';


class Arrow extends Component {
    state = {
        showArrow: false
    }

    handleScrollCallback = () => {
        let showArrow = this.state.showArrow;
        const hegiht = window.scrollY

        if (hegiht > 300) {
            showArrow = true
        } else {
            showArrow = false
        }

        this.setState({
            showArrow
        })
    }
    render() {
        return (
            <>
                <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
                <div className={`arrowTop ${this.state.showArrow ? "showArrow" : ""}`}>

                    <Link
                        activeClass="active"
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <i class="fas fa-arrow-circle-up"></i>
                    </Link>
                </div>

            </>
        );
    }
}

export default Arrow;