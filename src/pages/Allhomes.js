import ProjectHero from "../components/ProjectHero";
import Image1 from "../images/campaign-analytics/detail6.jpg";
import Image2 from "../images/campaign-analytics/detail5.jpg";
import Image3 from "../images/campaign-analytics/detail3.jpg";
import Image4 from "../images/campaign-analytics/detail4.jpg";
import SwiperSection from "../components/SwiperSection";
import AppFooter from "../components/AppFooter";

function AllhomesApp() {
  const projectId = "allhomes-app";
  return (
    <div className={projectId}>
      <ProjectHero
        title="Allhomes App"
        client="Domain | Allhomes"
        id="allhomes-app"
        color="#e81043"
      />
      <section className="section--intro">
        <div className="grid">
          <div
            className="grid-cell grid6 intro-text"
            style={{ paddingRight: "2rem" }}
          >
            <h2>
              Design and delivery of multiple features to bring agents and
              seekers together on Canberra's favourite property app
            </h2>
          </div>
          <div className="grid-cell grid6 credits">
            <h3>My Role</h3>
            <p>UI Design</p>
            <p>User Testing</p>
            <p>QA</p>
          </div>
        </div>
      </section>
      <SwiperSection
        id="allhomes-app"
        swiperHeading="School Search"
        screenSize="mobile"
        data={[
          {
            image: Image1,
            caption:
              "New options within our Search demanded that we future-proof our Search and Autocomplete components. I began this project by redesigning these core elements within our Design System in consultation with our engineers.",
          },
          {
            image: Image2,
            caption:
              "Map Search results. I restyled how polygons and icons would appear on the map to create consistency with the many types of geo-search available on Allhomes. We also had to allow customers to move the map without automatically refreshing the search ('Search this Area').",
          },
          {
            image: Image3,
            caption:
              "I consulted with content and legal to ensure the messaging throughout the experience was timely and accurate.",
          },
        ]}
      />
      <AppFooter
        next={{
          id: "campaign-analytics",
          client: "Playground XYZ",
          title: "Campaign Analytics",
        }}
      />
    </div>
  );
}

export default AllhomesApp;
