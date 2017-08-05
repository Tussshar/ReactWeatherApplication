var React = require('react');

var ErrorModal = React.createClass({
  /*
    componentDidMount and componentWillMount are component life cycle method
    present in facebook react docs.
    componentWillMount: gets called b4 ur component is ever rendered.
    Here u can set ur state

    componentDidMount: gets rendered after the elements have been rendered in the DOM
  */
  /*Adding random comment*/
  getDefaultProps: function(){
    return {
      title: 'Error'
    };
  },
  /*
  Prop Type is a way to define which properties our component expect,
  The values. Whether it is a string, a number or a function and whether
  or not it is required.
  */
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    var {title, message} = this.props;

      return (
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <p>/*data-close automatically closes the modal when button is clicked*/
            <button className="button hollow" data-close="">Okay</button>
          </p>
        </div>
      );
  }
});

module.exports = ErrorModal;
