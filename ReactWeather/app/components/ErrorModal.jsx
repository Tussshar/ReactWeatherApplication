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
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
      return (
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>Some Title</h4>
          <p>Our error Message!</p>
          <p>/*data-close automatically closes the modal when button is clicked*/
            <button className="button hollow" data-close="">Okay</button>
          </p>
        </div>
      );
  }
});

module.exports = ErrorModal;
