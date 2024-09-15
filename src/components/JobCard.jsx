const JobCard = ()=>{
    return (
        <div className="job-ad-item">
        <div className="item-info">
        <div className="item-image-box">
        <div className="item-image">
        <a href="job-details.html"><img src="images/job/3.png" alt="Image" className="img-fluid"/></a>
        </div>
        </div>
        <div className="ad-info">
        <span><a href="job-details.html" className="title">CTO</a> @ <a href="#">Volja Events & Entertainment</a></span>
        <div className="ad-meta">
        <ul>
        <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i>San Francisco, CA, US </a></li>
        <li><a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i>Full Time</a></li>
        <li><a href="#"><i className="fa fa-money" aria-hidden="true"></i>$25,000 - $35,000</a></li>
        <li><a href="#"><i className="fa fa-tags" aria-hidden="true"></i>HR/Org. Development</a></li>
        </ul>
        </div>
        </div>
        <div className="button">
        <a href="#" className="btn btn-primary">Apply Now</a>
        </div>
        </div>
        </div>
    )
}

export default JobCard;