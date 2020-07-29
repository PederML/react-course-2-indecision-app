"use strict";

// JSX - JavaScript XML

// Constants used in the application
var app = {
    title: "CoolApp",
    subtitle: 'CoolSubtitle',
    options: []
};

// function to add an option
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log("Form submitted!");
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

// Function to remove all options
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

// Find the rootID of the HTML site
var appRoot = document.getElementById("app");

// Render the application with the given values
var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            { "class": "title" },
            " Title: ",
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            " Subtitle: ",
            app.subtitle,
            " "
        ),
        React.createElement(
            "p",
            null,
            " ",
            app.options.length > 0 ? "Here are your options:" : "No options",
            " "
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove all options"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    " Option: ",
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                " Add Option "
            )
        )
    );

    // Render a specific template
    ReactDOM.render(template, appRoot);
};

// init
var init = function init() {
    render();
};

init();
