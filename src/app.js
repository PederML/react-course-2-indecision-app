// JSX - JavaScript XML

// Constants used in the application
const app = {
    title : "CoolApp",
    subtitle : 'CoolSubtitle',
    options : []
};


// function to add an option
const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};


// Function to remove all options
const onRemoveAll = () => {
    app.options = [];
    render();
};


const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

// Find the rootID of the HTML site
const appRoot = document.getElementById("app");



// Render the application with the given values
const render = ()=> {
    const template = (
        <div>
            <h1>Title: {app.title}</h1>
            {app.subtitle && <p> Subtitle: {app.subtitle} </p>}
            <p> {app.options.length > 0 ? ("Here are your options:"): "No options"} </p>
            <button onClick={onRemoveAll}>Remove all options</button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}> Option: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button> Add Option </button>
            </form>
        </div>
);

    // Render a specific template
    ReactDOM.render(template, appRoot);

};

// init
const init = () =>{
    render();
};

init();

