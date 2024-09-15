import NavBar from "../components/NavBar";
import ResumeEducationalInfo from "../components/ResumeEducationalInfo";
import ResumeWorkHistory from "../components/ResumeWorkHistory";

const Resume = ()=>{
    return (
        <div>
            <NavBar/>
            <section className=" job-bg page  ad-profile-page">
            <div className="container">
            <div className="breadcrumb-section">
            <ol className="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li>Candidate Profile</li>
            </ol>
            <h2 className="title">Jhon Doe Resume</h2>
            </div>
            <div className="resume-content">
            <div className="profile section clearfix">
            <div className="profile-logo">
            <img className="img-fluid" src="images/job/resume.jpg" alt="Image"/>
            </div>
            <div className="profile-info">
            <h1>Jhon Doe</h1>
            <address>
            <p>Address: 123 West 12th Street, Suite 456 New York, NY 123456 <br/> Phone: +012 345 678 910 <br/> Email:<a href="#"> <span className="__cf_email__" data-cfemail="bfd6cbccd2daffcccacdc5d6d3dad8dadad491dcd0d2">[email&#160;protected]</span></a></p>
            </address>
            </div>
            </div>
            <div className="career-objective section">
            <div className="icons">
            <i className="fa fa-black-tie" aria-hidden="true"></i>
            </div>
            <div className="career-info">
            <h3>Career Objective</h3>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni।</p>
            </div>
            </div>
            <div className="work-history section">
            <div className="icons">
            <i className="fa fa-briefcase" aria-hidden="true"></i>
            </div>
            <div className="work-info">
            <h3>Work History</h3>
            <ul>
                <ResumeWorkHistory/>
                <ResumeWorkHistory/>
                <ResumeWorkHistory/>
                <ResumeWorkHistory/>
            </ul>
            </div>
            </div>
            <div className="educational-background section">
            <div className="icons">
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            </div>
            <div className="educational-info">
            <h3>Education Background</h3>
            <ul>
                <ResumeEducationalInfo/>
                <ResumeEducationalInfo/>
                <ResumeEducationalInfo/>
            </ul>
            </div>
            </div>
            <div className="special-qualification: section">
            <div className="icons">
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            </div>
            <div className="qualification">
            <h3>Special Qualification:</h3>
            <ul>
            <li><span>1.</span> 5 years+ experience designing and building products In the Design & IT industry.</li>
            <li><span>2.</span> Passion for people-centered design, solid intuition.</li>
            <li><span>3.</span> Skilled at any Kind Design Tools. </li>
            <li><span>4.</span> Hard Worker & Quick Lerner.</li>
            </ul>
            </div>
            </div>
            <div className="language-proficiency section">
            <div className="icons">
            <i className="fa fa-language" aria-hidden="true"></i>
            </div>
            <div className="proficiency">
            <h3>Language Proficiency</h3>
            <ul className="list-inline">
            <li className="list-inline-item">
            <h5>English</h5>
            <ul>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
            </ul>
            </li>
            <li className="list-inline-item">
            <h5>German</h5>
            <ul>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
            </ul>
            </li>
            <li className="list-inline-item">
            <h5>Spanish</h5>
            <ul>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            </ul>
            </li>
            <li className="list-inline-item">
            <h5>Latin</h5>
            <ul>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star" aria-hidden="true"></i></li>
            <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
            </ul>
            </li>
            </ul>
            </div>
            </div>
            <div className="personal-deatils section">
            <div className="icons">
            <i className="fa fa-user-secret" aria-hidden="true"></i>
            </div>
            <div className="personal-info">
            <h3>Personal Deatils</h3>
            <ul className="address">
            <li><h5>Full Name </h5> <span>:</span>Jhon Doe</li>
            <li><h5>Fathers Name </h5> <span>:</span>Robert Doe</li>
            <li><h5>Mothers Name </h5> <span>:</span>Ismatic Roderos Doe</li>
            <li><h5>Date of Birth </h5> <span>:</span>26/01/1982</li>
            <li><h5>Birth Place </h5> <span>:</span>United State of America</li>
            <li><h5>Nationality </h5> <span>:</span>Canadian</li>
            <li><h5>Sex </h5> <span>:</span>Male</li>
            <li><h5>Address </h5> <span>:</span>121 King Street, Melbourne Victoria, 1200 USA</li>
            </ul>
            </div>
            </div>
            <div className="declaration section">
            <div className="icons">
            <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
            </div>
            <div className="declaration-info">
            <h3>Declaration</h3>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni। dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            </div>
            <div className="buttons">
            <a href="#" className="btn">Send Email</a>
            </div>
            <div className="download-button">
            <a href="#" className="btn">Download Resume as doc</a>
            </div>
            </div>
            </div>
            </section>
        </div>
    )
}

export default Resume;