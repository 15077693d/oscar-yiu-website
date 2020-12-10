import React from 'react';

const HeadingBlock = (props) => {
    const textElement = props.children.filter( item => item.key.includes('text'))[0]
    let text = textElement.props.children
    text = text.replace(" ","-")
    return React.createElement('h' + props.level, {id: text}, props.children)
};

export default HeadingBlock;