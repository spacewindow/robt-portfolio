import AppFooter from "../components/AppFooter";
function Allhomes() {
  const projectId = "allhomes";
  return (
    <div className={projectId}>
      <p>Allhomes</p>
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
