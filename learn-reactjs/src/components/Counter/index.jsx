import React, { PureComponent, useState } from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {

};

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            {count}
            <button onClick={() => setCount(x => x + 1)}>Increase</button>
        </div>
    );
}

// class Counter extends PureComponent {
//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0,
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.count}
//                 <button
//                     onClick={() => this.setState(prevState => ({
//                         count: prevState.count + 1,
//                     }))}>
//                     Increase
//                 </button>
//             </div>
//         );
//     }
// }

export default Counter;