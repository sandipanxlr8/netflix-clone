import React from 'react'

import { useContent } from '../hooks';
import selectionFliterMap from '../utils/selectionFilterMap';
import BrowseContainer from '../containers/browse';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFliterMap({ series, films });

  return (
    <>
      <BrowseContainer slides={slides} />
    </>
  )
}
