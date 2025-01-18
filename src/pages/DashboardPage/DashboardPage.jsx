import OverviewCard from '../../components/OverviewCard/OverviewCard';
import './DashboardPage.scss';

function DashboardPage({openModal}) {
    return(
        <>
            <OverviewCard openModal={openModal}/>
        </>
    )
}

export default DashboardPage;