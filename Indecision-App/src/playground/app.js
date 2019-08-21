console.log('running');

class IndecisionApp extends React.Component {

    constructor (props) {
        super (props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if(options) {
                this.setState(() => ({options}));
            }
        }   catch(e) {

        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount(){

    }

    handleDeleteOptions () {
        // this.setState(() =>{
        //     return {
        //         options: []
        //     };
        // });

        this.setState (() => ({options: [] }));
    }

    handleDeleteOption (optionToDelete) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToDelete !== option)
        }));
    }

    handlePick () {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption (option) {
        if (!option) {
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option)> -1) {
            return 'This option already exists'
        }

        // this.setState ((prevState) => {
        //     return{
        //         options: prevState.options.concat(option)
        //     };
        // });

        this.setState ((prevState) => ({
            options: prevState.options.concat(option) 
        }));
    }

    render () {
        const subtitle = 'Here is some info:';
        //const options = ['Thing One', 'Thing Two', 'Thing Four'];
        return (
            <div>
                <Header subtitle = {subtitle}/>
                <Action 
                    hasOptions = {this.state.options.length> 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>  test test              
          <h1>{props.title} </h1> 
          {props.subtitle && <h2>{props.subtitle}</h2>} 
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision '
};

// class Header extends React.Component {
//     render () {
//         return (
//             <div>                
//               <h1>{this.props.title} </h1> 
//               <h2>{this.props.subtitle}</h2> 
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                disabled = {!props.hasOptions}
                onClick = {props.handlePick}
            >
                What should I do?</button>
        </div>
    );
    
}

// class Action extends React.Component {
//     render () {
//         return (
//             <div>
//                 <button
//                     disabled = {!this.props.hasOptions}
//                     onClick = {this.props.handlePick}
//                 >
//                     What should I do?</button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick = {props.handleDeleteOptions}>Remove All</button>
            {props.options.length=== 0 && <p>Please add an option to get started! </p>}
            {
                props.options.map ((option) => (
                    <Option 
                        key = {option}
                        optionText= {option}
                        handleDeleteOption= {props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

// class Options extends React.Component {
    
//     render () {
//         return (
//             <div>
//                 <button onClick = {this.props.handleRemoveAll}>Remove All</button>
//                 {
//                     this.props.options.map ((option) => <p key = {option}>{option}</p>)
//                 }
//                 <Option/>
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick= {(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
};

// class Option extends React.Component {
//     render () {
//         return (
//             <div>
//                 Option component here
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {

    constructor (props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    
    handleAddOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        // if (option) {
        //     this.props.handleAddOption(option);
        // };

        // this.setState (() => {
        //     return {error};
        // });

        this.setState (() => ({
            error
        }));

        if(!error) {
            e.target.elements.option.value = '';
        }
    }  
     
    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.handleAddOption}>
                    <input type = 'text' name = 'option'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const jsx = (
//     <div>
//         <Header/>
//         <Action/>
//         <Options/>
//         <AddOption/>
//     </div>
// );

// ReactDOM.render(jsx, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));