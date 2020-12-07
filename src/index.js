import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

    clique() {
        alert('Elemento clicado!');
    }

    render() {
        return (
            <button className="square" onClick={this.clique}>
                {this.props.value}
            </button>
        );
    }
}

function Board(props) {
    return (
        <div>
            <div className="board-row">
                <Square value="X"/>
                <Square value="O"/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
        </div>
    );
}

function Game(props) {
    return (
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>

            <div className="game-info">
                Info
            </div>
        </div>
    );
}

ReactDOM.render(
    // Elemento que será renderizado
    <Game/>,
    // Local em que esse elemento será renderizado
    document.getElementById('root')
);
