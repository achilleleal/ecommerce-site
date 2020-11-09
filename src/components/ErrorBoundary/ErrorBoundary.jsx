import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="txt-center m1">
                    <h3>Oops, something went wrong.</h3>
                    <p>Please refresh the page</p>
                </div>
        )}
        
        return this.props.children;
    }
}
