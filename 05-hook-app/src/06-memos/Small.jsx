import { memo } from 'react';

export const Small = memo(({value}) => {

  console.log('Me volví a dibnujar :(')
  return (
    <small> {value} </small>
  )
})
