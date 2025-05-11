import React from "react";
import PropTypes from 'prop-types';
import Sidebar from "../Component/Sidebar";
import ChatBot from 'react-simple-chatbot';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: '',
            age: '',
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { name, gender, age } = steps;
        this.setState({ name, gender, age });
    }

    render() {
        const { name, gender, age } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{name.value}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{gender.value}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{age.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

class Event_Polibot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                name: '',
                gender: '',
                age: '',
            },
            stepCount: 0,
        };
    }

    handleUserInput = (input) => {
        // Modify the bot's responses dynamically based on user input.
        let responseMessage = '';
        const { name, gender, age } = this.state.userData;

        if (this.state.stepCount === 0 && input !== name) {
            responseMessage = `Hello, ${input}! Let's continue with the next steps.`;
        } else if (this.state.stepCount === 1 && input !== gender) {
            responseMessage = `Great, ${input} is noted. Now, let's proceed to the next step.`;
        } else if (this.state.stepCount === 2 && input !== age) {
            responseMessage = `Got it, you're ${input} years old! Ready to confirm your details?`;
        }

        this.setState(prevState => ({
            stepCount: prevState.stepCount + 1,
        }));

        return responseMessage;
    };

    render() {
        return (
            <div>
                <div className="container" style={{ width: '100%' }}>
                    <div className="row">
                        <Sidebar />
                        <div className="col-lg-9">
                            <br/><br/><br/>
                            <ChatBot
                                steps={[
                                    {
                                        id: '1',
                                        message: 'Hi! What is your name?',
                                        trigger: 'name',
                                    },
                                    {
                                        id: 'name',
                                        user: true,
                                        trigger: '2',
                                        validator: (value) => {
                                            if (!value) return 'Name cannot be empty';
                                            return true;
                                        },
                                    },
                                    {
                                        id: '2',
                                        message: `Hello {previousValue}! What's your gender?`,
                                        trigger: 'gender',
                                    },
                                    {
                                        id: 'gender',
                                        options: [
                                            { value: 'male', label: 'Male', trigger: '4' },
                                            { value: 'female', label: 'Female', trigger: '4' },
                                        ],
                                    },
                                    {
                                        id: '4',
                                        message: 'How old are you?',
                                        trigger: 'age',
                                    },
                                    {
                                        id: 'age',
                                        user: true,
                                        trigger: '6',
                                        validator: (value) => {
                                            if (isNaN(value)) {
                                                return 'Please enter a valid number for age';
                                            } else if (value < 0 || value > 120) {
                                                return 'Please enter a valid age (0-120)';
                                            }
                                            return true;
                                        },
                                    },
                                    {
                                        id: '6',
                                        message: 'Great! Let’s review your information.',
                                        trigger: 'review',
                                    },
                                    {
                                        id: 'review',
                                        component: <Review />,
                                        asMessage: true,
                                        trigger: 'update-question',
                                    },
                                    {
                                        id: 'update-question',
                                        message: 'Would you like to update any information?',
                                        trigger: 'update-options',
                                    },
                                    {
                                        id: 'update-options',
                                        options: [
                                            { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                                            { value: 'no', label: 'No', trigger: 'end-message' },
                                        ],
                                    },
                                    {
                                        id: 'update-yes',
                                        message: 'Which information would you like to update?',
                                        trigger: 'update-fields',
                                    },
                                    {
                                        id: 'update-fields',
                                        options: [
                                            { value: 'name', label: 'Name', trigger: 'update-name' },
                                            { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                                            { value: 'age', label: 'Age', trigger: 'update-age' },
                                        ],
                                    },
                                    {
                                        id: 'update-name',
                                        update: 'name',
                                        trigger: '6',
                                    },
                                    {
                                        id: 'update-gender',
                                        update: 'gender',
                                        trigger: '6',
                                    },
                                    {
                                        id: 'update-age',
                                        update: 'age',
                                        trigger: '6',
                                    },
                                    {
                                        id: 'end-message',
                                        message: 'Thanks! Your information has been saved.',
                                        end: true,
                                    },
                                ]}
                                style={{ width: '100%' }} // Full width for the ChatBot component
                            />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event_Polibot;
