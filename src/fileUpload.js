import React, { Component } from 'react'

class FileUpload extends Component {
  constructor (props) {
    super(props)
    this.state = {
      uploadValue: 0
    }
  }

  render () {
    return (
      <div>
        <progress value={this.state.uploadValue} max='100'></progress>
        <br />
        <input className='input-file' type='file' onChange={this.props.onUpload} />
      </div>
    )
  }
}

export default FileUpload
