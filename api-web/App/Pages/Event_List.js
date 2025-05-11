import React from "react";
import Sidebar from "../Component/Sidebar";

class EventList extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        // Mock data for testing before API integration
        const mockData = [
            {
                eventTitle: "Sample Event 1",
                address: "123 Event St",
                totalGuest: 150,
                desc: "Description for event 1",
            },
            {
                eventTitle: "Sample Event 2",
                address: "456 Another St",
                totalGuest: 200,
                desc: "Description for event 2",
            },
        ];

        // Set the state with mock data first
        this.setState({ data: mockData, isLoading: true });

        // Uncomment below for real API integration
        // fetch('https://desolate-taiga-45305.herokuapp.com/Event')
        //     .then((response) => response.json())
        //     .then((findResponse) => {
        //         console.log('API Response:', findResponse);
        //         this.setState({
        //             data: findResponse,
        //             isLoading: true,
        //         });
        //     });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <Sidebar />
                        <div className="col-lg-9">
                            {/* Display loading spinner if data is not loaded yet */}
                            {!this.state.isLoading && (
                                <img src="https://loading.io/spinners/wave/lg.wave-ball-preloader.gif" alt="Loading" />
                            )}

                            {/* Render event cards from mock data */}
                            {this.state.data.map((dynamicData, index) => (
                                <div key={index} className="card mt-4">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 order-lg-2">
                                            <div className="p-5">
                                                <img className="img-fluid rounded-circle" src="/img/03.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 order-lg-1">
                                            <div className="p-5">
                                                <h2 className="display-4" id="ename">
                                                    {dynamicData.eventTitle}
                                                </h2>
                                                <p>{dynamicData.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4>Total Guest: {dynamicData.totalGuest}</h4>
                                        <p className="card-text">{dynamicData.desc}</p>
                                        <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span> 4.0 stars
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

export default EventList;
