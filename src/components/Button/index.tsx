import React from 'react';

import style from './Button.module.scss';

// forma "antiga" usando Class
class Button extends React.Component<{
        type?: "button" | "submit" | "reset" | undefined,
        children?: React.ReactNode ,
        onClick?: () => void,
    }> {
    render() {        
        const { type = "button", onClick } = this.props;
        /* const styles = {
            backgroundColor: 'red',
        } */
        return (            
            // não recomendado usar style
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;