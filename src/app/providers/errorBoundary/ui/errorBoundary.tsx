import React, {ErrorInfo} from "react";
import { withTranslation } from "react-i18next";
import {ErrorPage} from "widgets/ErrorPage/ui/ErrorPage";

interface ErrorBoundaryProps {
    children?: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            return <ErrorPage/>;
        }

        return children;
    }
}

export default ErrorBoundary;