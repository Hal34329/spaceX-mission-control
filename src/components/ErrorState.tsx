type ErrorStateProps = {
    message: string
}

const ErrorState = ({ message }: ErrorStateProps) => {
    return(
        <h1>Error: {message}</h1>
    )
}

export default ErrorState