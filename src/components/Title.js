import React from 'react';

// const  headline } = t;
class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div>
        <h2>{headline}</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
