console.log('running');

const app = {
    Title:'Indecision app',
    SubTitle:'This is some info',
    Options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option= e.target.elements.option.value;

    if (option) {
        app.Options.push(option);
        e.target.elements.option.value= '';
        render();
    };
};

const RemoveAll = () => {
    app.Options.length = 0;
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.Options.length);
   const option = app.Options[randomNum];
   alert(option);
};

const AppRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.Title}</h1>
            {(app.SubTitle) && <p>{app.SubTitle}</p>}
            <p>{app.Options.length > 0 ? 'Here are some options' : 'No option'}</p>
            <button disabled={app.Options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {app.Options.map((option) => <li key= "{option}">{option}</li>)}
            </ol>
            <form onSubmit= {onFormSubmit}>
            <input type= "text" name= "option"/>
            <button>Add Option</button>
            <button onClick = {RemoveAll}>Remove All</button>

            </form>
        </div>
    );
    ReactDOM.render(template, AppRoot);
};

render();






