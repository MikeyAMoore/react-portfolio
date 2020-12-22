import React, { Component } from "react";

import portfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    render () {
        return (
            <div>
                <h2>Portfolio items go here updated</h2>
                
                <PortfolioItem />
            </div>
        )
    }
}
