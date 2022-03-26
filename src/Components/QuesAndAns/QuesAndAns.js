import React from 'react';
import './QuesAndAns.css'

const QuesAndAns = () => {
    return (
        <div className='row my-5 container'>
        <h3 className='mb-4'>People Want to Know: </h3>
          <div className="col-md-4 quesAns text-white p-3">
                        <h3>How React Works?</h3>
                         <p>When we create components, it shows in website. React renders the components and create a virtual DOM. When we change in components, React creats new virtual DOM and compare with old virtual dom and check what change happened. Then, update in website only changes things and keep other things unchanged. So, React makes website SPA. and load website only for one times.</p>
                    </div>
                    <div className="col-md-4 quesAns text-white p-3">
                        <h3>Difference Betweeen Props And State (props vs state)</h3>
                       Props are used to pass data from one components to another components and data flow is unidirectional(parent to child). Using concept of lifting up stages, we can pass data from child to parent. Props are not mutable. On the otherhand, stats are mutable. It is local to the component only. We can update the state value in the componet.
                    </div>
                    <div className="col-md-4 quesAns text-white p-3">
                        <h3>How UseState Works?</h3>
                        <p>Usestate is a hook.For using useState, we need to import it from react.It should be used only inside functionals components. It can keep only an argument which is the initial state. It returns an array with two items. One is the current value and another one is a function. Function is used for updating the state. </p>
                     </div>
        </div>
    );
};

export default QuesAndAns;