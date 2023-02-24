function IdCard(props){
    return(
        <div className="id-card">
            <div>
                <img style={{width: "250px", borderRadius: "15px"}} src={props.image}/>
            </div>
            <div>
                <h4>First Name: {props.firstName}</h4>
                <h4>Last Name: {props.lastName}</h4>
                <h4>Gender: {props.gender}</h4>
                <h4>Height: {props.height}</h4>
                <h4>Birth Date: {props.birthDate}</h4>
            </div>
        </div>
    )
}

export default IdCard