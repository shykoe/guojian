import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

const styles = {
    image: {
        maxHeight: '10rem',
        margin: '0.5rem',
    },
};

export const ImageField = ({ elStyle = {}, record, source, title }) => {
    const style = {
        ...styles.container,
        ...elStyle,
    };

    const titleValue = get(record, title) || title;
    const srcValue = get(record, source);
    if (!srcValue) {
        return <div />;
    }
    if(srcValue.map!=undefined){
        return (
            <div style={style}>
                {srcValue.map((i,ind)=>(
                    <a href="#" onClick={e => {
                        e.preventDefault();
                        const image = new Image();
                        image.src = i;

                        const w = window.open('');
                        w.document.write(image.outerHTML);
                    }}>
                        <img
                            title={titleValue}
                            alt={titleValue}
                            src={i}
                            key={ind}
                            style={styles.image}
                        />
                    </a>
                ))}
            </div>
        );
    };
    return (
            <div style={style}>

                    <img
                    title={titleValue}
                    alt={titleValue}
                    src={srcValue}
                    style={styles.image}
                />
            </div>
        );
};

ImageField.propTypes = {
    elStyle: PropTypes.object,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
    title: PropTypes.string,
};

export default ImageField;
