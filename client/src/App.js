// imports
import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";

// local imports
import {Home} from "./pages/home";
import Sale from "./pages/sale";
import {Auction} from "./pages/auction";

class App extends React.Component {

    render() {
        return (
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/sale/:collectibleId"
                    element={<Sale />}
                />
                <Route
                    path="/auction/:collectibleId"
                    element={<Auction />}
                />
            </Routes>
        );
    }

}

export default App;