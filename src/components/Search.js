import React from 'react';
import PatientListSearch from './PatientListSearch';

class Search extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     patientList: [],
        // }

        // this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    componentDidMount() {
        // const patientList = [...this.state.patientList];

        // this.setState({
        //     patientList: patientList
        // });
    }

    // handleSearchChange(value) {
    //     const newPatientList = this.state.patientList.filter((item) => {
    //         const itemLowercase = item.toLowerCase();
    //         const valueLowercase = value.toLowerCase();

    //         if(itemLowercase.includes(valueLowercase)) {
    //             return true;
    //         }
    //     });

    //     this.setState({
    //         list: newPatientList
    //     });
    // }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder={this.props.placeholder}
                    onChange={ (e) => this.props.handleSearchChange(e.target.value) }
                />
            </div>
        );
    }
}

export default Search;