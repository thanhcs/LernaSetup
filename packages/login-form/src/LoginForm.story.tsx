import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { LoginForm } from './LoginForm';
import ComponentParams from './ComponentParams';
import { MemoryRouter as Router } from 'react-router-dom';

storiesOf('LoginForm', module)
    .addDecorator(story => <Router initialEntries={['/foo']}>{story()}</Router>)
    .add('default', () => {
        const onClick = action('logIn clicked');
        return <LoginForm onClick={onClick} />;
    })
    .add('Test Router', () => <ComponentParams />);
