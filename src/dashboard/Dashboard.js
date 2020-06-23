import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { sem, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="center collapsible-header">
        <div>
          {" "}
          <Link
            className="btn-floating btn-large waves-effect waves-light teal lighten-1"
            to="/add"
          >
            <i className="material-icons">add</i>
          </Link>
          <Link to="/add">Add Student</Link>
        </div>
        <div />
        <div className="waves-effect">
          {sem &&
            sem.map(semName => {
              return (
                <div className="col s4 m4" key={semName.id}>
                  <div className="card blue-grey darken-2 card-content white-text">
                    <span className="card-title">{semName.name}</span>
                    <div className="card-action">
                      <Link to={"/studentlist/" + semName.id}>
                        Student List
                      </Link>
                      <Link to={"/addmarks/" + semName.id}>Enter Marks</Link>
                      <Link to={"/studyMaterial/" + semName.id}>
                        Study Material
                      </Link>
                      <Link to={"/syllabus/" + semName.id}>Syllabus</Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.firestore.ordered.students,
    sem: state.year.year,
    auth: state.firebase.auth
  };
};
export default compose(
  firestoreConnect(["students"]),
  connect(mapStateToProps)
)(Dashboard);
//export default connect(mapStateToProps)(Dashboard)
