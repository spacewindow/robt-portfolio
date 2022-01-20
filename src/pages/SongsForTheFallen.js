import AppFooter from "../components/AppFooter";

function SongsForTheFallen() {
  return (
    <div>
      Songs for the Fallen
      <AppFooter
        previous={{
          id: "campaign-analytics",
          client: "Playground XYZ",
          title: "Campaign Analytics",
        }}
        next={{
          id: "store-locator",
          client: "Playground XYZ",
          title: "Store Locator",
        }}
      />
    </div>
  );
}

export default SongsForTheFallen;
