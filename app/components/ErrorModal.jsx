var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

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

    var {title, message} = this.props;

    var modalMarkUp = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>/*data-close automatically closes the modal when button is clicked*/
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkUp));
    $(ReactDOM.findDOMNode(this)).html($modal);

    /*
      We could have written the code by keeping just below two line in
      componentDidMount and writing the div that's stored in modalMarkUp in
      return statement of render function. And no need of $modal

      But foundation by calling modal.open makes some chnages to the DOM
      and React doesnot work well with third party library updating the DOM
      like that.

      Now its not too hard to fix all we need to do is remove the returning div
      outside the render method and into the componentDidMount
    */
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){


    return (
      <div>

      </div>
    );
  }
});

module.exports = ErrorModal;
