import * as React from 'react';

export interface Props {
  className: string,
  path: string,
  alt: string,
}

const ImageComponent = ({ className, path, alt }: Props) => (
  <img className={className} src={`https://image.tmdb.org/t/p/original/${path}`} alt={alt} />
);

export default ImageComponent;
