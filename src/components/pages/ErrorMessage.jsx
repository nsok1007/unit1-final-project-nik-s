export default function ErrorMessage({conditionalMessage}) {
    return(
        <div className="errorMessage">
            <h1>ERROR</h1>
            <h2>COULD NOT DISPLAY CONTENT</h2>
            <p><em>{conditionalMessage}</em></p>
        </div>
    );
};

