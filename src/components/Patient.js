import React from 'react';
import './Patient.css';

class Patient extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            firstName: '',
            lastName: '',
            dob: '',
            sex: '',
            procedures: '',
         };

         this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            firstName: this.props.data.firstName,
            lastName: this.props.data.lastName,
            dob: this.props.data.dob,
            sex: this.props.data.sex,
            procedures: this.props.data.procedures,
        })
    }

    componentDidUpdate(prevProps) {
        if(
            prevProps.data.firstName !== this.props.data.firstName ||
            prevProps.data.lastName !== this.props.data.lastName ||
            prevProps.data.dob !== this.props.data.dob ||
            prevProps.data.sex !== this.props.data.sex ||
            prevProps.data.procedures !== this.props.data.procedures
            ) {
            this.setState({
                firstName: this.props.data.firstName,
                lastName: this.props.data.lastName,
                dob: this.props.data.dob,
                sex: this.props.data.sex,
                procedures: this.props.data.procedures,
            });
        }

    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            isOpen: false
        });
    }

    render() {
        if(this.state.isOpen) {
            // Show the expanded version.
            return (
                <form onSubmit={ this.handleSubmit }>
                    <div className="patient-dropdown">
                        <label>
                                First: <input type="text" value={ this.state.firstName } onChange={ (e) => this.setState({ firstName: e.target.value }) }/><br/>
                        </label>
                        <label>
                                Last: <input type="text" value={ this.state.lastName } onChange={ (e) => this.setState({ lastName: e.target.value }) }/><br/>
                        </label>
                        <label>
                                DOB: <input type="text" value={this.state.dob} onChange={ (e) => this.setState({ dob: e.target.value}) }/><br/>
                        </label>
                        <label>
                            Sex: <input type="text" value={this.state.sex} onChange={ (e) => this.setState({ sex: e.target.value}) }/><br/>
                        </label>
                        {/* <label className="patient-dropdown">
                            <select name="sex">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select><br/>
                        </label> */}
                        <label>
                            Procedures: <textarea value={this.state.procedures} onChange={ (e) => this.setState({ procedures: e.target.value}) }/><br/>
                        </label>

                    </div>
                    
                    <div className="save-delete">
                        <label className="save">
                            <button onClick={ () => this.props.handleSave(this.props.data._id, {
                                firstName: this.state.firstName,
                                lastName: this.state.lastName,
                                dob: this.state.dob,
                                sex: this.state.sex,
                                procedures: this.state.procedures,
                            }) }>SAVE</button>
                        </label>
                        <label className="delete">
                            <button onClick={ () => this.props.handleDelete(this.props.data._id) }>DELETE</button>
                        </label>
                    </div>
                </form>
            );
        }
        else {
            // Show the collapsed version.
            return (
                <div className="patient-container closed">
                    <div>{ this.props.data.firstName } { this.props.data.lastName }</div>
                    <button onClick={ () => this.setState({ isOpen: true }) }>EDIT / VIEW</button>
                </div>
            );
        }
    }

}

export default Patient;