import './DisplayResult.css'

function DisplayResult(props) {

    // console.log('Id =', JSON.stringify(props.userDetails));
    let userDetailsContent =
        <div className='div-container'>
            <p className='label-error'> No Results Found </p>
        </div>;
    if (props.userDetails && props.userDetails.id) {
        userDetailsContent =
            <div>
                <div className='div-container'>
                    <label className='label-key'>ID : </label>
                    <label className='label-value'>{props.userDetails.id}</label>
                </div>
                <div className='div-container'>
                    <label className='label-key'>First Name : </label>
                    <label className='label-value'>{props.userDetails.first_name}</label>
                </div>
                <div className='div-container'>
                    <label className='label-key'>Last Name : </label>
                    <label className='label-value'>{props.userDetails.last_name}</label>
                </div>
                <div className='div-container'>
                    <label className='label-key'>Email : </label>
                    <label className='label-value'>{props.userDetails.email}</label>
                </div>
                <div className='div-container'>
                    <label className='label-key'>Gender : </label>
                    <label className='label-value'>{props.userDetails.gender}</label>
                </div>
            </div>;
    }

    return (
        <div>
           {userDetailsContent}
        </div>
    );
}

export default DisplayResult;