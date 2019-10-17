import React from "react";
import Chat from "./Chat";
import InputForm from "./InputForm";
import Popup from "reactjs-popup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisibility: true,
      name: ""
    };
  }

  render() {
    let NameInputPopup = () => {

      // https://reactjs.org/docs/hooks-state.html
      const [values, setValues] = React.useState({
        name: "",
        modalVisibility: true
      });

      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };

      const handleClick = event => {
        this.setState({
          modalVisibility: false,
          name: values.name
        });
      };

      return (
        <Popup open={this.state.modalVisibility} position="top left">
          {close => (
            <div className="row">
              <TextField
                id="standard-name"
                label="Name"
                value={values.name}
                onChange={handleChange("name")}
                margin="normal"
                closeondocumentclick="false"
                closeonescape="false"
              />
              <Button variant="contained" onClick={handleClick}>
                Start chat
              </Button>
            </div>
          )}
        </Popup>
      );
    };

    return (
      <div className="home">
        <NameInputPopup />
        <Chat />
        <div className="input_row">
          <div className="input_area">
            <div className="name">{this.state.name}:</div>
            <InputForm person={this.state.name} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
