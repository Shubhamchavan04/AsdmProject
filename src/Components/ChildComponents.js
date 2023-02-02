import React from 'react'

const ChildComponents = ({count}) => {
    return (
        <div>
            <h2>This is Child Component</h2>
            <p>Counter Value is: <strong>{count}</strong></p>
        </div>
    )
}

export default React.memo(ChildComponents)
