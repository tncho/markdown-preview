import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Header from './Header';

storiesOf('Header/Default', module)
    .add('with default title', () => <Header></Header>)
    .add('with some emoji', () => <Header>Custom Title</Header>);
