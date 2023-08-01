import React from 'react';

function InformationApi({ post }) {
  return (
    <>
      <div>{post.Title}</div>
      <div>{post.Address}</div>
      <div>{post.Time}</div>
      <div>{post.Number}</div>
    </>
  );
}

export default InformationApi;
