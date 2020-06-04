import React, { Component } from 'react'
import { Modal } from 'react-bootstrap/Modal';

class StudyMaterial extends Component {
    render() {
        const id = this.props.match.params.id
        console.log(id)
        if (id == 1) {
            console.log("id is 1");
            return (
                <div></div>
            )
        }
        else if (id === 2)
            return (
                <div></div>
            )
        else if (id === 3)
            return (
                <div></div>
            )
    }
}
export default StudyMaterial