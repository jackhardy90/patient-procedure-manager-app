import React from 'react';
import Patient from './Patient';
import Search from './Search'

class PatientList extends React.Component{
    constructor(props) {
        super(props)
    };

    renderPatientList() {
        return (
            this.props.list.map((patient) => {
                return <Patient data={ patient } key={ patient._id } handleDelete={ this.props.handleDelete } handleSave={ this.props.handleSave }/>;
            })
        );
    }

   

    render() {
        if(this.props.list.length > 0) {
            return (
                <div className="render-patient-list">
                    { this.renderPatientList() }
                </div>
            );
        }
        else {
            return (<h4>'No matching patients's</h4>);
        }
    }
}

export default PatientList;