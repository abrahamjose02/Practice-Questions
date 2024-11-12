import { Component } from "react";

// Define an ErrorBoundary class component that extends React.Component
export default class ErrorBoundary extends Component {
    // Constructor initializes the state with hasError set to false
    constructor(props) {
        super(props);
        this.state = { hasError: false };  // `hasError` is used to track if an error has occurred
    }

    /**
     * `getDerivedStateFromError` is a lifecycle method specific to error boundaries in React.
     * It is called when an error is thrown in any of the child components.
     * This method allows us to update the state based on the error.
     * Here, we set `hasError` to true when an error occurs.
     */
    static getDerivedStateFromError(error) {
        // Return an object to update state to indicate that an error has occurred
        return { hasError: true };
    }

    /**
     * `componentDidCatch` is another error boundary lifecycle method that gets called
     * when an error is caught in a child component.
     * This method receives two arguments:
     * - `error`: the actual error that was thrown
     * - `errorInfo`: an object with more information about the error, specifically the component stack trace
     * This is useful for logging errors to an external service or for debugging.
     */
    componentDidCatch(error, errorInfo) {
        console.error('Error caught in ErrorBoundary:', error, errorInfo);
        // In a real-world app, you might send error details to a logging service here
    }

    /**
     * `render` method determines what to display on the screen.
     * - If `hasError` is true, it means an error was caught, so we display a fallback UI.
     * - If no error is caught, `this.props.children` renders the child components normally.
     */
    render() {
        if (this.state.hasError) {
            // Show a fallback UI if an error occurred in any child component
            return <h2>Something went wrong. Please try again later.</h2>;
        }
        
        // If no error occurred, render the child components normally
        return this.props.children;
    }
}
