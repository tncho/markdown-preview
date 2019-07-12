import * as React from 'react';
import PanelStyled from './styled';

interface PanelComponentProps {
    children?: any
}

const PanelComponent: React.FunctionComponent<PanelComponentProps> = ({ children }: PanelComponentProps) => {
    return (
        <PanelStyled>
            {children}
        </PanelStyled>
    );
};

export default PanelComponent;
