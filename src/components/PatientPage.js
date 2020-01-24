import React from "react";
import "./PatientPage.css";
import Search from "./Search";
import PatientList from "./PatientList";
import NewPatientForm from "./NewPatientForm";
import PatientListSearch from "./PatientListSearch"
// import patientsJson from "../patients.json";
import Axios from "axios";

class PatientPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: [],
      originalPatients: [],
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
      Axios.get('https://patient-procedure-manager.herokuapp.com/api/patients')
      .then((response) => {
        const patients = response.data

        this.setState({
            patients: patients,
            originalPatients: [...patients],
        });
      })
      .catch((error) => {
        
          //TODO: show error to user
      });
  }

  handleAdd(patient) {
    Axios.post('https://patient-procedure-manager.herokuapp.com/api/patients', patient)
        .then((response) => {
            this.fetchPosts();
        })
        .catch((eroror) => {
            
        })
  }

  handleDelete(id) {
    Axios.delete(`https://patient-procedure-manager.herokuapp.com/api/patients/${id}`)
        .then((response) => {
            this.fetchPosts();
        })
        .catch((error) => {
           
        });
  }

  handleSave(id, data) {
    Axios.put(`https://patient-procedure-manager.herokuapp.com/api/patients/${id}`, data)
        .then((response) => {
            this.fetchPosts();
        })
        .catch((error) => {
            
        })
  }

  handleNewPatient(id) {
      this.updatePost(id)
  }

  componentDidMount () {
      this.fetchPosts();
  }

  handleSearchChange(value) {
    const clone = [...this.state.originalPatients];

    const newPatientList = clone.filter((item) => {
        const fullName = item.firstName + ' ' + item.lastName;

        const fullNameLowercase = fullName.toLowerCase();
        const valueLowercase = value.toLowerCase();

        if(fullNameLowercase.includes(valueLowercase)) {
            return true;
        }
    });

    this.setState({
      patients: newPatientList
    });
  }

  render() {
    return (
      <div className="patient-page-container">
        <div className="header">
          <h1>Patients</h1>
          <div>
            <span>Patient Search</span>
            <Search 
                placeholder={this.props.placeholder}        
                handleSearchChange={ this.handleSearchChange }    
            />
          </div>
        </div>
        <PatientList 
            list={ this.state.patients } 
            handleDelete={ this.handleDelete }
            handleSave={ this.handleSave }
        />
        <NewPatientForm 
            handleAdd={ this.handleAdd }
        />
      </div>
    );
  }
}

export default PatientPage;
