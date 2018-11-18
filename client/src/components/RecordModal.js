import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addRecord } from "../actions/recordActions";

class RecordModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };

  onChangeArtist = e => {
    this.setState({ artist: e.target.value });
  };

  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newRecord = {
      name: this.state.name,
      artist: this.state.artist,
      description: this.state.description
    };

    // Add item via addRecord action
    this.props.addRecord(newRecord);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Record
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Record List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="record">Record</Label>
                <Input
                  className="mb-3"
                  type="text"
                  name="name"
                  id="item"
                  placeholder="record name"
                  onChange={this.onChangeName}
                />
                <Input
                  className="mb-3"
                  type="text"
                  name="artist"
                  id="artist"
                  placeholder="artist name"
                  onChange={this.onChangeArtist}
                />
                <Input
                  className="mb-3"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description"
                  onChange={this.onChangeDescription}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Record
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  record: state.record
});

export default connect(
  mapStateToProps,
  { addRecord }
)(RecordModal);
