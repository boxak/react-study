import React, {useState, useRef} from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const IterationSample = () => {

    const [names, setNames] = useState([
        {id : 1, text : '눈사람'},
        {id : 2, text : '얼음'},
        {id : 3, text : '눈'},
        {id : 4, text : '바람'}
    ]);

    const [inputText, setInputText] = useState('');

    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    const input = useRef("");

    const onClick = () => {
        const nextNames = names.concat({
           id : nextId,
           text : inputText 
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
 
        input.current.focus();
    }

    const namesList = names.map(name => <li key={name.id}>{name.text}</li>);

    return (
        <Fragment>
            <input value={inputText} onChange={onChange} 
            ref={input}/>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </Fragment>
    );
};

export default IterationSample;