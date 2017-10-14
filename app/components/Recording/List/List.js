import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import ListItem from 'components/Recording/ListItem';

function List({ loader }) {
  const recordings = loader.get('data');

  return (
    <div>
      {recordings.map((recording) => (
        <div key={recording.get('url')} className="mb-3">
          <ListItem recording={recording} />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  loader: ImmutablePropTypes.map.isRequired,
};

export default List;
