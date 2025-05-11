import React from "react";
import Sidebar from "../Component/Sidebar";

// Reusable Input Field Component
const InputField = ({ label, id, value, onChange, placeholder, type = "text", required = false }) => (
    <div className="form-group col-md-6">
        <label>{label}</label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            required={required}
            className="form-control"
            placeholder={placeholder}
        />
    </div>
);

const TextAreaField = ({ label, id, value, onChange, placeholder, rows = 5 }) => (
    <div className="form-group">
        <label>{label}</label>
        <textarea
            id={id}
            className="form-control"
            rows={rows}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
);

class EventCreate extends React.Component {
    constructor() {
        super();
        this.state = {
            eventDetails: {
                eventTitle: "",
                venueName: "",
                address: "",
                description: "",
                organizerName: "",
                totalGuest: "",
            },
        };

        // Binding methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Generic handle change for form fields
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            eventDetails: {
                ...this.state.eventDetails,
                [name]: value,
            },
        });
    }

    // Form submit handler
    handleSubmit(e) {
        e.preventDefault();
        fetch("https://desolate-taiga-45305.herokuapp.com/Event", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state.eventDetails),
        });
    }

    render() {
        const { eventDetails } = this.state;

        return (
            <div>
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <Sidebar />
                        <div className="col-lg-9">
                            <section>
                                <form onSubmit={this.handleSubmit}>
                                    <br />
                                    <br />
                                    <br />
                                    <div className="form-row">
                                        <InputField
                                            label="Event Title"
                                            id="txtEventTitle"
                                            name="eventTitle"
                                            value={eventDetails.eventTitle}
                                            onChange={this.handleChange}
                                            placeholder="e.g : Hockey Tournament"
                                            required
                                        />
                                        <InputField
                                            label="Venue Name"
                                            id="txtVenue"
                                            name="venueName"
                                            value={eventDetails.venueName}
                                            onChange={this.handleChange}
                                            placeholder="e.g : Olympic Stadium"
                                            required
                                        />
                                    </div>

                                    <InputField
                                        label="Address"
                                        id="txtAddress"
                                        name="address"
                                        value={eventDetails.address}
                                        onChange={this.handleChange}
                                        placeholder="e.g: Sudirman St"
                                        required
                                    />

                                    <TextAreaField
                                        label="Description"
                                        id="txtDescription"
                                        name="description"
                                        value={eventDetails.description}
                                        onChange={this.handleChange}
                                        placeholder="e.g : Free 1 Soft Drink"
                                    />

                                    <InputField
                                        label="Organizer Name"
                                        id="txtOrganizer"
                                        name="organizerName"
                                        value={eventDetails.organizerName}
                                        onChange={this.handleChange}
                                        placeholder="e.g: Orega Inc"
                                        required
                                    />

                                    <InputField
                                        label="Total Guest"
                                        id="txtTotalGuest"
                                        name="totalGuest"
                                        value={eventDetails.totalGuest}
                                        onChange={this.handleChange}
                                        placeholder="e.g: 150"
                                        required
                                    />

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">
                                            Create
                                        </button>
                                        <button type="button" className="btn btn-warning">
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default EventCreate;
