import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "./Button";

storiesOf("Button/Default", module)
    .add("with text", () => (
        <Button>Santi</Button>
    ))
    .add("with some emoji", () => (
        <Button>(emoji)</Button>
    ));