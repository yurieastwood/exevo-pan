import React, { useState, useEffect, useRef } from 'react';
import AutocompleteInput from './AutocompleteInput.styled';

export default ({ items, placeholder, onChange }) => {
    const uniqueID = useRef(Math.random())
    const inputRef = useRef(null);
    const [term, setTerm] = useState('');

    const dataList = Object.keys(items);

    const handleChange = (event) => {
        const { value } = event.target;
        setTerm(value);
    }

    const handleKey = (event) => {
        if(event.key === 'Enter') inputRef.current.blur();
    }

    useEffect(() => {
        const timeOutObj = setTimeout(() => onChange(items[term]), 500);
        return () => clearTimeout(timeOutObj);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [term]);

    const stopBubbling = (event) => {
        event.stopPropagation();
    }

    return (
        <AutocompleteInput
            onMouseDown={stopBubbling}
            onMouseUp={stopBubbling}
            onMouseMove={stopBubbling}
            className={term === '' ? null : 'active'}
        >
            <input
                list={uniqueID.current}
                placeholder={placeholder}
                value={term}
                onChange={handleChange}
                onKeyDown={handleKey}
                ref={inputRef}
            />

            <datalist id={uniqueID.current}>
                {dataList.map((item, index) => {
                    return (
                        <option
                            key={index}
                            aria-label="Input option"
                            value={item}
                        />
                    )
                })}
            </datalist>

            {/* eslint-disable */}
            <div
                className="reset-button"
                onClick={() => setTerm('')}
                role="button"
                tabIndex="0"
            >
            </div>
            {/* eslint-enable */}
        </AutocompleteInput>
    )
}