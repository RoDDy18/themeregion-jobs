/* eslint-disable react/prop-types */
const WorkshopCard = ({img, title, duration, instructor, amount, date})=>{
    return (
        <div className="col-md-6">
        <div className="workshop">
        <img src={img} alt="Image" className="img-fluid"/>
        <h3><a href="#">{title}</a></h3>
        <h4>Course Duration: {duration}</h4>
        <div className="workshop-price">
        <h5>Course instructor:{instructor}</h5>
        <h5>Course Amount: {amount}</h5>
        </div>
        <div className="ad-meta">
        <div className="meta-content">
        <span className="dated"><a href="#">{date} </a></span>
        </div>
        <div className="user-option pull-right">
        <a href="#"><i className="fa fa-map-marker"></i> </a>
        </div>
        </div>
        </div>
        </div>
    )
}

export default WorkshopCard;