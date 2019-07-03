/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import Nautilus, { PageTitle, Paragraph, Button } from '@octopusthink/nautilus';

import ExampleFetch from './ExampleFetch';

function App() {
  return (
    <Nautilus>
      <div
        css={css`
          text-align: center;
        `}
      >
        <header
          css={css`
            background-color: #282c34;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
          `}
        >
          <PageTitle>Phase</PageTitle>
          <Paragraph inverse>
            Want to check your GitHub stats? Of course you do!
          </Paragraph>
          <Button primary href="#thing">
            Go Gadget go!
          </Button>
          <ExampleFetch />
        </header>
      </div>
    </Nautilus>
  );
}

export default App;
