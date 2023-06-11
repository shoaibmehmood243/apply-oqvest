import { ProgressSpinner } from 'primereact/progressspinner';

const LoadingPage = ({name}) => {
    return (
        <div className='flex justify-center items-center' style={{ height: '80vh' }}>
            <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" />
            <h6>Loading...</h6>
        </div>
    );
}

export default LoadingPage;