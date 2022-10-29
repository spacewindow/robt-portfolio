import AppFooter from "../components/AppFooter";
import ProjectHero from "../components/ProjectHero";

function Allhomes() {
  const projectId = "allhomes";
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

export default Allhomes;
