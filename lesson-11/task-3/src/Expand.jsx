import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Expand = ({ title, children, onClose, isOpen, onOpen }) => {
  if (!isOpen) {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={onOpen}>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      <div className="expand__content">{children}</div>
    </div>
  );
};

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

Expand.defaltProps = {
  title: '',
  isOpen: false,
};

export default Expand;
