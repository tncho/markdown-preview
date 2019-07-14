import * as React from 'react';
export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const styles = {
    border: '1px solid #eee',
    borderRadius: 3,
    backgroundColor: 'darkgray',
    cursor: 'pointer',
    fontSize: 15,
    padding: '3px 10px',
    margin: 10
};

const Button: React.SFC<ButtonProps> = props => (
    <button onClick={props.onClick} style={styles} type="button">
        {props.children}
    </button>
);

export default Button;
