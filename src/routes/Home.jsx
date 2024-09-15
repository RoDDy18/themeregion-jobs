import Hero from "../components/Hero"
import NavBar from "../components/NavBar"
import JobCategory from "../components/JobCategory"
import JobCard from "../components/JobCard"
import WorkshopCard from "../components/WorkshopCard"

import account from "../assets/1.png"
import education from "../assets/2.png"
import engineer from "../assets/3.png"
import garments from "../assets/4.png"
import hr from "../assets/5.png"
import design from "../assets/6.png"
import research from "../assets/7.png"
import medical from "../assets/8.png"
import music from "../assets/9.png"
import marketing from "../assets/10.png"
import production from "../assets/11.png"
import misc from "../assets/12.png"
import brief from "../assets/brief.png"
import people from "../assets/people.png"
import jobs from "../assets/31.png"
import company from "../assets/32.png"
import candidate from "../assets/33.png"
import Download from "../components/Download"
import Footer from "../components/Footer"

const Home = ()=>{
    return (
        <div>
            <NavBar/>
            <Hero/>
            <div className="page">
                <div className="container">
                <div className="section category-items job-category-items  text-center">
                <ul className="category-list">
                <JobCategory title="Accounting/Finance" count="1298" img={account}/>    
                <JobCategory title="Education/Training" count="76212" img={education}/>    
                <JobCategory title="Engineer/Architects" count="212" img={engineer}/>    
                <JobCategory title="Garments/Textile" count="972" img={garments}/>    
                <JobCategory title="HR/Org.Development" count="1298" img={hr}/>    
                <JobCategory title="Design/Creative" count="76212" img={design}/>    
                <JobCategory title="Research/Consultancy" count="1298" img={research}/>    
                <JobCategory title="Medical/Pharma" count="76212" img={medical}/>    
                <JobCategory title="Music & Arts" count="212" img={music}/>    
                <JobCategory title="Marketing/Sales" count="1298" img={marketing}/>    
                <JobCategory title="Production/Operation" count="124" img={production}/>    
                <JobCategory title="Miscellaneous" count="972" img={misc}/>    
                </ul>
                </div>
                <div className="section latest-jobs-ads">
                <div className="section-title tab-manu">
                <h4>Latest Jobs</h4>

                <ul className="nav nav-tabs" role="tablist">
                <li role="presentation"><a href="#hot-jobs" data-toggle="tab">Hot Jobs</a></li>
                <li role="presentation"><a href="#recent-jobs" data-toggle="tab">Recent Jobs</a></li>
                <li role="presentation"><a className="active" href="#popular-jobs" data-toggle="tab">Popular Jobs</a></li>
                </ul>
                </div>
                <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in" id="hot-jobs">
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                </div>
                <div role="tabpanel" className="tab-pane fade in" id="recent-jobs">
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                </div>
                <div role="tabpanel" className="tab-pane fade in active show" id="popular-jobs">
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                </div>
                </div>
                </div>
                <div className="ad-section text-center">
                <a href="#"><img src="images/ads/3.jpg" alt="Image" className="img-fluid"/></a>
                </div>
                <div className="section workshop-traning">
                <div className="section-title">
                <h4>Workshop Traning</h4>
                <a href="#" className="btn btn-primary">See all</a>
                </div>
                <div className="row">
                    <WorkshopCard title="Business Process Management Training" duration="3 Month ( Sat, Mon, Fri)" instructor="Kim Jon ley" amount="$200" date="7 Jan 10:10 pm" img={brief}/>
                    <WorkshopCard title="Employee Motivation and Engagement" duration="3 Month ( Sat, Mon, Fri)" instructor="Kim Jon ley" amount="$200" date="7 Jan 10:10 pm" img={people}/>

                </div>
                </div>
                <div className="section cta cta-two text-center">
                <div className="row">
                <div className="col-md-4">
                <div className="single-cta">
                <div className="cta-icon icon-jobs">
                <img src="images/icon/31.png" alt="Icon" className="img-fluid"/>
                </div>
                <h3>3,412</h3>
                <h4>Live Jobs</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                </div>
                <div className="col-md-4">
                <div className="single-cta">

                <div className="cta-icon icon-company">
                <img src="images/icon/32.png" alt="Icon" className="img-fluid"/>
                </div>
                <h3>12,043</h3>
                <h4>Total Company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                </div>
                <div className="col-md-4">
                <div className="single-cta">
                <div className="cta-icon icon-candidate">
                <img src="images/icon/33.png" alt="Icon" className="img-fluid"/>
                </div>
                <h3>5,798,298</h3>
                <h4>Total Candidate</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                <Download/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;