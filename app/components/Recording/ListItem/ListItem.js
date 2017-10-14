import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Card from 'material-ui/Card';
import { FormattedDate, FormattedTime } from 'react-intl';
import ReactPlayer from 'react-player';

import Rating from 'components/Common/Rating';

function ListItem({ recording }) {
  return (
    <Card>
      <div className="p-3">
        <div>
          <ReactPlayer
            url={recording.get('url')}
            config={{ file: { forceAudio: true } }}
            height={50}
            loop
            controls
          />
        </div>
        <div className="mt-2">
          <FormattedDate value={recording.get('created')} />
          &nbsp;-&nbsp;
          <FormattedTime
            value={recording.get('duration') * 1000}
            hour="2-digit"
            minute="2-digit"
            second="2-digit"
            hour12={false}
            timeZone="UTC"
          />
          &nbsp;-&nbsp;
          <Rating value={recording.get('rating')} />
        </div>
        <div className="mt-2">{recording.get('final_script')}</div>
      </div>
    </Card>
  );
}

ListItem.propTypes = {
  recording: ImmutablePropTypes.map.isRequired,
};

export default ListItem;
