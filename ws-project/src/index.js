import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);

// ReactDOM.render(
//     React.createElement('button', {
//         onClick: () => console.log('CLICK')
//     }, 'Нажми на меня!'),
//     // <div>
//     //     Приложение работает!
//     //     <button>Кнопка</button>
//     // </div>,
//     document.getElementById("root")
// );