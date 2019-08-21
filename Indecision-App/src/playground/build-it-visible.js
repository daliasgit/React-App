class VisibilityToggle extends React.Component {
    constructor (props) {
        super (props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleVisibility}>{this.state.visibility? 'Hide details': 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hei! These are some details you can now see.</p>
                    </div>  
                )}  
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let msg = "";

// const toggle= () => {
    
//     if (msg.length > 0) {
//         msg = "";
//     } else {
//         msg = "Hei. These are some details you can now see!";
//     }

//     render();
// };

// const appRoot = document.getElementById("app");

// const render= () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick= {toggle} name= 'text'>{msg.length > 0?"Hide details": "Show details"}</button>
//             <div><p>{msg}</p></div>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();

