import { mount } from 'enzyme';
import * as React from 'react';

import { LoginForm } from './LoginForm';

jest.mock('@thanhcs/input', () => ({ Input: 'input' }));

describe('LoginForm', () => {
    test('should match snapshot and styles', () => {
        expect(mount(<LoginForm />)).toMatchSnapshot();
    });
});
