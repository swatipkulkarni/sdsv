import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class StudentDetails extends Component {
  getYearName = currentYear => {
    switch (currentYear) {
      case 1:
        return "Dasa";
      case 2:
        return "Dasa Shree";
      case 3:
        return "Dasa Nidhi";
      default:
        return "";
    }
  };
  render() {
    const { students, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="row">
        <div className="col s12 m10">
          <div className="card-panel teal lighten-1">
            <span className="white-text">
              {students.map(student => {
                return (
                  <tbody key={student.id}>
                    <tr>
                      <td>Name : </td>
                      <td>
                        {student.firstName} {student.lastName}
                      </td>
                    </tr>
                    <tr>
                      <td>Phone : </td>
                      <td>{student.phone}</td>
                    </tr>
                    <tr>
                      <td>Email : </td>
                      <td>{student.email}</td>
                    </tr>
                    <tr>
                      <td>Address : </td>
                      <td>
                        {student.address} {student.city} {student.state}{" "}
                        {student.country} {student.pincode}
                      </td>
                    </tr>
                    <tr>
                      <td>Current year : </td>
                      <td>{this.getYearName(student.currentYear)}</td>
                    </tr>
                  </tbody>
                );
              })}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    students: state.firestore.ordered.students
  };
};
export default compose(
  firestoreConnect(props => [
    {
      collection: "students",
      doc: props.match.params.id
    }
  ]),
  connect(mapStateToProps)
)(StudentDetails);
