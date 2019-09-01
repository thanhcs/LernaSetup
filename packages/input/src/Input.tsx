import * as React from 'react';
import styled from 'styled-components';

export interface LabelProps {
    labelWidth?: number;
}

export interface InputWithLabelProps extends LabelProps {
    id?: string;
    label?: string;
}

export interface InputWithoutLabelProps extends LabelProps {
    id: string;
    label: string;
}

export type InputLabelProps = InputWithLabelProps | InputWithoutLabelProps;

export interface InputProps {
    name?: string;
    type?: string;
}

const Wrapper = styled.div`
    display: flex;
    margin: 20px;
`;

const NativeInput = styled.input`
    width: 100%;
`;

export const Input: React.SFC<InputProps & InputLabelProps> = ({ label, id, labelWidth, ...rest }) => (
    <Wrapper>
        {label}
        <NativeInput id={id} {...rest} />
    </Wrapper>
);

Input.defaultProps = {
    type: 'text',
};
