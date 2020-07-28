
// counter
let count = 0;

// Functions
const addOne = () => {
  count ++;
  console.log('Add one: ', count);
};
const minusOne = () => {
  count --;
  console.log('Minus one: ', count);
};
const reset = () => {
  count = 0;
  console.log('reset; ', count);
};


// Find the rootID of the HTML site
const appRoot = document.getElementById("app");


// render
const renderCounterApp = ()=> {

    // Create the template
      const templateTwo = (
      <div>
          <h1> Count : {count} </h1>
          <button onClick={minusOne}> -1</button>
          <button onClick={addOne}>+1</button>
          <button onClick={reset}>reset</button>
      </div>
      );

    // Render a specific template
    ReactDOM.render(templateTwo, appRoot);

};

//render
renderCounterApp();