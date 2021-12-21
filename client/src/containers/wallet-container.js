// imports
import React from "react";

// local imports
import WalletComponent from "../components/wallet-component";

class WalletContainer extends React.Component {

    render() {
        return (
            <WalletComponent {...this.props} />
        )
    }

}

export default WalletContainer;