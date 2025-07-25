import React , {useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import Footer from '../components/Footer/Main'
import Pageabout from '../components/pages/about/Main'
import Team from '../components/pages/team/Main'
import Teamdeatils from '../components/pages/Teamdeatils/Main'
import Portfolio from '../components/pages/Portfolio/Main'
import Portfoliodeatils from '../components/pages/portfoliodeatils/Main'
import Causes from '../components/pages/causes/Main'
import Causesdeatils from '../components/pages/causesdeatils/Main' 
import Services from '../components/pages/services/Main'
import Servicesdeatils from '../components/pages/servicesdeatils/Main'
import Departments from '../components/pages/departments/Main'
import Departmentdetails from '../components/pages/departmentdeatils/Main'
import Events from '../components/pages/events/Main'
import Eventdeatils from '../components/pages/eventsdeatils/Main'
import News from '../components/pages/News/Main'
import Newsdeatils from '../components/pages/newsdeatils/Main'
import Contact from '../components/contact/Main'
import Home from '../components/home/Main'
import Donate from '../components/pages/Donatepge/DonatePage';
import FAQ from '../components/pages/faq/Main'
import Supportus from '../components/pages/supportus/Main';
import Ourmodel from '../components/pages/ourmodel/Main'
import Diagram from '../components/pages/diagram/Main'
import Ghi from '../components/pages/ghi/Main'
import Npt from '../components/pages/npt/Main'
import Uvi from '../components/pages/uvi/Main'
import Affordablehousingdevelopment from '../components/pages/affordablehousingdevelopment/Main'
import Polyframebuildingsystem from '../components/pages/polyframebuildingsystem/Main'
import Sustainablevillages from '../components/pages/sustainablevillages/Main'
import Citygovernment from '../components/pages/citygovernment/Main'
import Missionstatement from '../components/pages/missionstatement/Main'
import Getinvolved from '../components/pages/getinvolve/Main'
import Blog1 from "../components/pages/singleblogs/Blog1/blog1"
import Blog2 from "../components/pages/singleblogs/Blog2/blog2"
import Blog3 from "../components/pages/singleblogs/Blog3/blog3"
import Privecy from "../components/privecy/privecy"
import Terms from "../components/condition/condition"
import Communitypartners from "../components/pages/comminitypertners/Main"
import Workforcedevelopment from "../components/pages/workforcedevelopment/Main"
import Innovation from "../components/pages/innovation/Main"
import Infrastructure from "../components/pages/Infrastructure/Main"
import Culturecommunity from "../components/pages/culturecommunity/Main"
import Safety from "../components/pages/safetylaw/Main"
import Technology from "../components/pages/ourtechnology/Main"
// *********************

// **********************



function Index() {

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    window.scroll(0, 0)
}, [path]);

  return (
    <>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Pageabout />} />
          <Route path="/team" element={<Team />} />
          <Route path="/teamdetails" element={<Teamdeatils />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfoliodeatils" element={<Portfoliodeatils />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/causedetails" element={<Causesdeatils />} />
          <Route path="/solutions" element={<Services />} />
          <Route path="/servicedetails" element={<Servicesdeatils />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departmentdetails" element={<Departmentdetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventdetails" element={<Eventdeatils />} />
          <Route path="/blogs" element={<News />} />
          <Route path="/newsdetails" element={<Newsdeatils />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/supportus" element={<Supportus />} />
          <Route path="/ourmodel" element={<Ourmodel />} />
          <Route path="/diagram" element={<Diagram />} />
          <Route path="/get-involved" element={<Getinvolved />} />
          <Route path="/ghi" element={<Ghi />} />
          <Route path="/npt" element={<Npt />} />
          <Route path="/uvi" element={<Uvi />} />
          <Route path="/affordable-housing-development" element={<Affordablehousingdevelopment />} />
          <Route path="/polyframe-building-system" element={<Polyframebuildingsystem />} />
          <Route path="/sustainable-urban-villages" element={<Sustainablevillages />} />
          <Route path="/city-government-partnerships" element={<Citygovernment />} />
          <Route path="/mission-statement" element={<Missionstatement />} />
          <Route path="/the-future-of-housing" element={<Blog1 />} />
          <Route path="/why-comminity-investment-is-the-key" element={<Blog2 />} />
          <Route path="/upcoming-cities-and-projects" element={<Blog3 />} />
          <Route path="/community-partners" element={<Communitypartners /> } />
          <Route path="/workforce-development" element={<Workforcedevelopment /> } />
          <Route path="/innovation" element={<Innovation /> } />
          <Route path="/infrastructure" element={<Infrastructure /> } />
          <Route path="/culture-community" element={<Culturecommunity /> } />
          <Route path="/safety-law" element={<Safety /> } />
          <Route path="/technology" element={<Technology /> } />

          <Route path='/privecy' element={<Privecy />}/>
          <Route path='/terms' element={<Terms />}/>
          {/* <Route path="/home2" element={<Home2 />} /> */}


        </Routes>

         <Footer />
    </>
  )
}

export default Index;