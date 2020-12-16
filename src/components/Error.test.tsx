import React from "react";
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils';
import Error, { ErrorProps } from './Error';

const defaultProps = { error: null};

const setup = (props?:ErrorProps) => {
    const setupProps =  { ...defaultProps, ...props}
    return shallow(<Error {...setupProps} />)
}

test('renders without error' ,() => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-error');
    expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false' ,() => {
    const wrapper = setup({ error: null });
    const component = findByTestAttr(wrapper, 'component-error');
    expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success`' ,() => {
    const wrapper = setup({ error: 'Some error occured' });
    const message = findByTestAttr(wrapper, 'error-message');
    expect(message.text().length).not.toBe(0);
});
