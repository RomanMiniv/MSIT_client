import React from 'react';
import Particles from 'react-particles-js';

const DynamicBackground = () => {
    return (
        <Particles
            // To Do: move styles to style file?
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -10 // To Do: standardize layer indexes
            }}
            params={{
                particles: {
                    number: {
                        value: 75,
                        density: {
                            enable: true,
                        }
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000'
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    size: {
                        value: 2
                    },
                    lineLinked: {
                        opacity: 0.4
                    },
                    
                }
            }}
        />
    );
}

export default DynamicBackground;
