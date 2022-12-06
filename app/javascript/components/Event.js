import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const Event = ({ events }) => {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  return (
    <div className="eventContainer">
      <h2>
        {event.event_date}
        {' - '}
        {event.event_type}
      </h2>
      <ul>
        <li>
          <strong>Location:</strong> {event.event_type}
        </li>
        <li>
          <strong>Price:</strong> {event.event_date}
        </li>
        <li>
          <strong>Price:</strong> {event.title}
        </li>
        <li>
          <strong>Owner:</strong> {event.speaker}
        </li>
        <li>
          <strong>Contact:</strong> {event.host}
        </li>
        <li>
          <strong>Available:</strong> {event.published ? 'yes' : 'no'}
        </li>
      </ul>
    </div>
  );
};

Event.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      event_type: PropTypes.string.isRequired,
      event_date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      host: PropTypes.string.isRequired,
      published: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Event;