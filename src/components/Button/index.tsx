import React from 'react';

import style from './Button.module.scss';

// forma "antiga" usando Class
class Button extends React.Component<{ children: React.ReactNode }> {
    render() {        
        /* const styles = {
            backgroundColor: 'red',
        } */
        return (            
            // não recomendado usar style
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;