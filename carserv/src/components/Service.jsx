import '../css/Service.css'
import AddIcon from '../assets/icons/AddIcon.png'
function Service({service, onAdd}){

    const handleAddClick = ()=>{
        onAdd(service)
    }

    return (
            <div className='row '>
                <div className='col-2' ><img style={{"height" : "50px"}} src={service.icon}/></div>
                <div className='col-6'>
                    <span className='serviceName'>{service.name}</span>
                    <p>{service.duration}</p>
                    <p>{service.description}</p>
                </div>
                <div className='col-2'>&#x20B9;{service.price}</div>
                <div className='col-2 plus text-end' onClick={handleAddClick}><img  src={AddIcon} style={{"width" : "30px"}}/></div>
            </div>    
    )
}

export default Service