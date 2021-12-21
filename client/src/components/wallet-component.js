// imports
import React from "react";
import {MdClose} from "react-icons/md";
import {FaGoogleWallet} from "react-icons/fa";
import {SiHyperledger, SiBlockchaindotcom} from "react-icons/si";
import {GiMeshNetwork} from "react-icons/gi";

// local imports
import "../styles/components/wallet.css";

class WalletComponent extends React.Component {

    render() {

        const {toggleWalletVisibility} = this.props;

        return (
            <section className="walletContainer">
                
                <div className="walletPaymentContainer">

                    <div className="walletPaymentCloseContiner">
                        <button
                            className="walletPaymentCloseButton"
                            onClick={() => toggleWalletVisibility(false)}
                        >
                            <MdClose
                                size={25}
                                color="#fff"
                            />
                        </button>
                    </div>

                    <div className="walletPaymentMethodContainer">

                        <div className="walletPaymentMethodHeaderContainer">
                            <p className="walletPaymentMethodText">
                                Payment Methods
                            </p>
                        </div>

                        <div className="walletPaytmentSection">

                            <div className="walletItemContainer">
                                <FaGoogleWallet size={20} />
                                &nbsp;&nbsp;
                                <span className="walletItemText">Wallet Connect</span>
                            </div>

                            <div className="walletItemContainer walletMarginTop">
                                <SiHyperledger size={20} />
                                &nbsp;&nbsp;
                                <span className="walletItemText">Ledger</span>
                            </div>

                            <div className="walletItemContainer walletMarginTop">
                                <SiBlockchaindotcom size={20} />
                                &nbsp;&nbsp;
                                <span className="walletItemText">Trezor</span>
                            </div>

                            <div className="walletItemContainer walletMarginTop">
                                <GiMeshNetwork size={20} />
                                &nbsp;&nbsp;
                                <span className="walletItemText">Network</span>
                            </div>

                        </div>

                        <div className="walletFooterContainer">
                            <div className="walletFooterContentContainer">
                                <span className="walletCircularDot" />
                                &nbsp;&nbsp;
                                <p className="walletFooterText">
                                    Not Connected
                                </p>
                            </div>  
                        </div>

                    </div>

                </div>

            </section>
        )
    }

}

export default WalletComponent;