import React from "react";
import './NewPatientForm.css';

class NewPatientForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      firstName: '',
      lastName: '',
      dob: '',
      sex: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();

      const payload = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        dob: this.state.dob,
        sex: this.state.sex,
      };

      this.props.handleAdd(payload);

      this.setState({
        isOpen: false,
        firstName: '',
        lastName: '',
        dob: '',
        sex: '',          
      });
  }

  render() {
    if (this.state.isOpen) {
        return (
        <div className="new-patient-container">
            <h3>New Patient Form</h3>
          <form onSubmit={ this.handleSubmit }>
              <label className="new-patient">
                <span>First Name:</span>
                <input type="text" value={ this.state.firstName } onChange={ (e) => this.setState({ firstName: e.target.value })}/>
              </label>
            <label className="new-patient">
                Last Name:
                <input type="text" value={ this.state.lastName } onChange={ (e) => this.setState({ lastName: e.target.value })}/>
            </label>
            <label className="new-patient">
                DOB:
                <input type="date" value={ this.state.dob } onChange={ (e) => this.setState({ dob: e.target.value })}/>
            </label>
            <label className="new-patient">
                Sex:
                    <select name="sex" value={ this.state.sex } onChange={ (e) => this.setState({ sex: e.target.value })}>
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>            
            </label>


            <br/>
            <div className="save">
                <button>SAVE</button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="new-patient-container closed">
          <button className="add-new-patient" onClick={() => this.setState({ isOpen: true })}>
            Add New Patient
          </button>
        </div>
      );
    }
  }
}

export default NewPatientForm;
