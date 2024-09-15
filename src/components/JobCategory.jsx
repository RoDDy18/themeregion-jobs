/* eslint-disable react/prop-types */
const JobCategory = ({img, title, count})=>{
    return (
        <li className="category-item">
        <a href="job-list.html">
        <div className="category-icon"><img src={img} alt="images" className="img-fluid"/></div>
        <span className="category-title">{title}</span>
        <span className="category-quantity">({count})</span>
        </a>
        </li>
    )
}

export default JobCategory;