class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            show: false,
            text: 'teeheeheeheeheeheeheeheehee'
        }
    }
    
    toggle() {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.show ? 'Hide' : 'Show'}</button>
                {this.state.show && (
                    <p>{this.state.text}</p>
                )}
            </div>
        )
    }
    
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
