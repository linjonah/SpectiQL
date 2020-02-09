import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class TestSuites extends Component {
  render() {
    console.log('testsuites props', this.props)
    const testSuite = this.props.testSuites.map((test, index) => (
      <Card style={{ width: "18rem" }} key={index}>
        <Card.Body>
          <Card.Title>Test Suite {index + 1}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {test.savedTestSuiteName}
          </Card.Subtitle>
          <Card.Text>{test.savedTestDescription}</Card.Text>
          <Button
            onClick={() => this.props.editTest(test.testIndex)}
          >
            Edit Test
          </Button>
          <Button
            onClick={() => this.props.deleteTest(test.testIndex)}
          >
            Delete Test
          </Button>
        </Card.Body>
      </Card>
    ));
    return (
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Test Suites</h3>
          </div>
          {testSuite}
        </nav>

        <div id="content">
          <nav id="content" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button type="button" id="sidebarCollapse" className="btn btn-info">
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default TestSuites;
