// Test if this file is running
console.log("Challenge section 3 is running!");

// Create the toggle functions
const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

// let variable used control the button details
let visibility = false;

// Create the HTML template
const render = () => {
        const template =  (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                <p> You can now see this content! </p>
                </div>
            )}
        </div>
    );

        // Render a HTML template
        ReactDOM.render(template, document.getElementById("app"));
};

render();
