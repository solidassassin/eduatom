import React from "react";
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

class Editor extends React.Component {
  state = {
    textValue: this.props.text || "",
  };
  handleChange = (value) => {
    this.setState({
      textValue: value,
    });
  };
  render() {
    return (
      <div>
        <SimpleMDEReact
          onChange={this.handleChange}
          id="your-custom-id"
          value={this.state.textValue}
        />
      </div>
    );
  }
}

export default Editor;
