'use strict';

// Test if this file is running
console.log("Challenge section 3 is running!");

// Create the toggle functions
var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

// let variable used control the button details
var visibility = false;

// Create the HTML template
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                ' You can now see this content! '
            )
        )
    );

    // Render a HTML template
    ReactDOM.render(template, document.getElementById("app"));
};

render();
