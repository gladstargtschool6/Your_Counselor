import React from "react";
import TextField from "@material-ui/core/TextField";
import "../../index.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { emitChatMessage } from "../../api";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      modalOpen: true
    };

    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  onChange(event, message) {
    const newMessage = event.target.value;
    this.setState({ message: newMessage });
  }

  _handleKeyDown(event) {
    if (event.key === "Enter") {
      emitChatMessage({ author: this.props.person, message: this.state.message });
      this.setState({ message: "" });
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="div_input_form">    
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-email-input"
            label="Tekst"
            type="text"
            name="text_box"
            fullWidth
            placeholder="Skriv inn tekst her..."
            autoComplete="off"
            margin="normal"
            variant="outlined"
            value={this.state.message}
            onChange={this.onChange.bind(this)}
            onKeyDown={this._handleKeyDown}
          />
        </form>
      </div>
    );
  }
}

// Not in use at the moment. Previous usage replaced by websockets. 
const mapStateToProps = ({todo}) => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputForm);
