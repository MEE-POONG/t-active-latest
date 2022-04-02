import PropTypes from "prop-types";
import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.pageTitle} || T-Active Stevia Syrup </title>
                    <meta name="robots" content="noindex, follow" />
                    <meta name="description" content="T-Active Stevia Syrup – Enjoy every moment with Premium sweetness. Stevia is rich in antioxidants and other glycoside compounds that, in themselves, help eliminate free radicals in the body. elementum aliquam tristique." />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                </Helmet>
            </React.Fragment>
        )
    }
}
PageHelmet.propTypes = {
    title: PropTypes.string
};
export default PageHelmet;
