import './OverviewCard.scss';

function OverviewCard() {
    return(
        <section className="overview">
            <div className="overview__card">
                <div className="overview__one">
                    <h3 className="overview__heading">Upcoming deliveries</h3>
                </div>
            </div>
            <div className="overview__metrics">
                <div className="overview__total">
                    <h4 className="overview__subheading">total deliveries</h4>

                </div>
                <div className="overview__total">
                    <h4 className="overview__subheading">litres of milk delivered</h4>
                    
                </div>
            </div>
        </section>
    )
}

export default OverviewCard;