import './ErrorView.css';

function ErrorView (props) {
    return (
        <div className='div-container'>
            <p  className='label-error'>{props.errorMessage}</p>
        </div>
    );
}

export default ErrorView;