import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Button } from './Button';
import "./Button.scss";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add(
    "default",
    () => (
      <Button label="Button label" onClick={action("click works only if not disabled")} />
    ),
    { info: { inline: true } }
  )
  .add(
    "disabled",
    () => (
      <Button label="Disabled" disabled onClick={action("click disabled")} />
    ),
    { info: { inline: true } }
  )
  .add(
    "customizable",
    () => {
      const label = text('label', 'customize label in knobs');
      const disabled = boolean('disabled', false);
      return (
        <Button label={label} disabled={disabled} onClick={action("click works only if not disabled")} />
      )
    },
    { info: { inline: true } }
  );