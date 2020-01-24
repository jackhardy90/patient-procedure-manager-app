import React from 'react';
import PatientList from './PatientList';
import Search from './Search';


class PatientListSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
            // firstName: '',
            // lastName: '',
            // dob: '',
            // sex: '',
            // procedures: '',
            
           patientList: []
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    componentDidMount() {
        const patientList = [...this.state.patientList];

        this.setState({
            patientList: patientList
        });
    }

    handleSearchChange(value) {
        const newPatientList = this.state.patientList.filter((item) => {
            const itemLowercase = item.toLowerCase();
            const valueLowercase = value.toLowerCase();

            if(itemLowercase.includes(valueLowercase)) {
                return true;
            }
        });

        this.setState({
            list: newPatientList
        });
    }

    render() {
        return(
            <div>
                <Search
                    placeholder= "Patient Search..."
                    handleChange={this.handleSearchChange}
                />
                <PatientList items={this.state.patientList}/>
            </div>
        );
    }
}

export default PatientListSearch;