import React from 'react';


export default function Profile(props) {
  const {img, index} = props;
  return (
<img src={img} key={`img-${index}`} />
  );
}