import React from 'react'
// import 'isomorphic-unfetch'
const fetch = require('isomorphic-unfetch');

import Layout from '../components/layouts'

export default class HomePage extends React.Component {
    static async getInitialProps() {
        let res = await fetch('http://127.0.0.1:3000/v1/api/countries');
        let countries = await res.json();
        return {countries: countries}
    }

    render() {
        return (
            <Layout>
                <h1>Country Lists</h1>

                <ul>
                    {
                        this.props.countries.map((country, i) => {
                            return (
                                <li key={'country-' + i}>{country.name}</li>
                            )
                        })
                    }
                </ul>
            </Layout>
        )
    }
}
