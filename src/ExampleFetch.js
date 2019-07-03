/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { Button, Heading, Paragraph } from '@octopusthink/nautilus';
import useAxios from '@use-hooks/axios';

const ExampleFetch = () => {
  const [id, setId] = useState(1);
  const { response, loading, error, reFetch } = useAxios(
    {
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: 'GET',
      options: {
        params: {},
      },
      trigger: id,
    },
    [id],
  );

  const fetchAgain = () => {
    setId(id + 1);
    reFetch();
  };

  let content = <Paragraph inverse>Nothing happened...</Paragraph>;
  if (loading) {
    content = <Paragraph inverse>Loading post ID {id}...</Paragraph>;
  }
  if (error) {
    content = <Paragraph inverse>{error}</Paragraph>;
  }
  if (response) {
    content = <Paragraph inverse>{response.data.body}</Paragraph>;
  }

  return (
    <div>
      <Heading level={2}>Post ID {id}</Heading>
      {content}
      <Button onClick={fetchAgain}>Fetch again but with a higher ID!</Button>
    </div>
  );
};

export default ExampleFetch;
