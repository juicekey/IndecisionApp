import React from 'react'
import ReactDOM from 'react-dom'


class Picsum extends React.Component {

    state = {
        imageSrc: 'https://picsum.photos/200?random',
        num: 0
    }

    handleRefreshImage = () => {
        this.setState(() => ({
            imageSrc: 'https://picsum.photos/200?random' + new Date().getTime()
        }))
    }

    render() {
        return (
            <div>
                <h1>Did it work though?</h1>
                <img src={this.state.imageSrc} />
                <button onClick={this.handleRefreshImage}>New picture</button>
            </div>
            
        )
    }

}

ReactDOM.render(<Picsum />, document.getElementById('app'))