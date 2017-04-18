import React, {Component} from "react";
import ComponentWrap from "./ComponentWrap";

class EmailContact extends Component {
    render() {
        return (
            <a className="tile is-parent is-4" href="mailto:antono@loveit.tips">
                <article className="tile is-child notification is-success has-text-centered stat-tile">
                    <p className="title">
                        <span className="fa fa-send"/>
                        <span> Email</span>
                    </p>
                    <p className="subtitle">antono@loveit.tips</p>
                </article>
            </a>
        )
    }
}

class SkypeContact extends Component {
    render() {
        return (
            <a className="tile is-parent is-4" href="skype:oparin.anton?call">
                <article className="tile is-child notification is-success has-text-centered stat-tile">
                    <p className="title">
                        <span className="fa fa-skype"></span>
                        <span> Skype</span>
                    </p>
                    <p className="subtitle">oparin.anton</p>
                </article>
            </a>
        )
    }
}

class CalendlyContact extends Component {
    render() {
        return(
            <a className="tile is-parent is-4" href="https://calendly.com/antono">
                <article className="tile is-child notification is-success has-text-centered stat-tile">
                    <p className="title">
                        <span className="fa fa-calendar-check-o"></span>
                        <span> Calendar</span>
                    </p>
                    <p className="subtitle">Let's talk</p>
                </article>
            </a>
        )
    }
}


class AllContact extends Component {
    render() {
        return (
            <div className="tile is-ancestor">
                <EmailContact/>
                <SkypeContact/>
                <CalendlyContact/>
            </div>
        );
    }
}

export default class ContactView extends Component {
    render(){
        return (
            <ComponentWrap>
                <AllContact/>
            </ComponentWrap>
        )
    }
}