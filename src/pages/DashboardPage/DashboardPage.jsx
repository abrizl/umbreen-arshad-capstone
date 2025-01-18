import OverviewCard from '../../components/OverviewCard/OverviewCard';
import './DashboardPage.scss';

function DashboardPage({openModal, fetchDeliveries}) {
    
    return(
        <>
            <OverviewCard openModal={openModal} fetchDeliveries={fetchDeliveries}/>
        </>
    )
}

export default DashboardPage;