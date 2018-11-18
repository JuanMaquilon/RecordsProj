import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { connect } from "react-redux";
import { getRecords, deleteRecord } from "../actions/recordActions";
import PropTypes from "prop-types";

class RecordList extends Component {
  componentDidMount() {
    this.props.getRecords();
  }

  onDeleteClick = id => {
    console.log("id", id);
    this.props.deleteRecord(id);
  };

  render() {
    const { records } = this.props.record;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="record-list">
            {records.map(({ _id, name, artist, description }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <div className="row">
                    <div className="col">
                      <Button
                        className="remove-btn col-md-3"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times;
                      </Button>
                    </div>

                    <div className="col">
                      <h5>Name:</h5>
                      {name}
                    </div>

                    <div className="col">
                      <h5>Artist:</h5>
                      {artist}
                    </div>

                    <div className="col">
                      <h5>Decription:</h5>
                      {description}
                    </div>

                    <div className="col">
                        {/* 
                        Create a button to "Edit".
                        after click create an action to load from the database
                        with an API and update the state.
                        Start a Modal with a form and the info loaded.
                        Add an update and cancel button on the modal. 
                        */}
                    </div>


                  </div>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

RecordList.propTypes = {
  getRecords: PropTypes.func.isRequired,
  record: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  record: state.record
});
export default connect(
  mapStateToProps,
  { getRecords, deleteRecord }
)(RecordList);
