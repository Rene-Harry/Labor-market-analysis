
// Get the select element
const selectElement = document.getElementById("courses_trend");

// Get the div elements
const lawDiv = document.getElementById("law_div");
const businessDiv = document.getElementById("business-and-hospitality");
const geoscienceDiv = document.getElementById("geoscience_div");
const engineeringDiv = document.getElementById("engineering_div");
const architectureDiv = document.getElementById("architecture-building-construction");
const computingDiv = document.getElementById("computingdiv");
const sciencesDiv = document.getElementById("sciences");
const actuarialDiv = document.getElementById("actuarial-science-accountancy-mathematics-economics-statistics");
const medicineDiv = document.getElementById("medicine-health-veterinary-medicine");
const educationDiv = document.getElementById("educations");

// Hide all divs initially
lawDiv.style.display = "none";
businessDiv.style.display = "none";
geoscienceDiv.style.display = "none";
engineeringDiv.style.display = "none";
architectureDiv.style.display = "none";
computingDiv.style.display = "none";
sciencesDiv.style.display = "none";
actuarialDiv.style.display = "none";
medicineDiv.style.display = "none";
educationDiv.style.display = "none";

// Listen for the change event on the select element
selectElement.addEventListener("change", (event) => {
  // Get the selected value
  const selectedValue = event.target.value;

  // Hide all divs initially
  lawDiv.style.display = "none";
  businessDiv.style.display = "none";
  geoscienceDiv.style.display = "none";
  engineeringDiv.style.display = "none";
  architectureDiv.style.display = "none";
  computingDiv.style.display = "none";
  sciencesDiv.style.display = "none";
  actuarialDiv.style.display = "none";
  medicineDiv.style.display = "none";
  educationDiv.style.display = "none";

  // Show the div based on the selected value
  switch (selectedValue) {
    case "law":
      lawDiv.style.display = "block";
      break;
    case "business-and-hospitality":
      businessDiv.style.display = "block";
      break;
    case "geoscience":
      geoscienceDiv.style.display = "block";
      break;
    case "engineering":
      engineeringDiv.style.display = "block";
      break;
    case "architecture-building-construction":
      architectureDiv.style.display = "block";
      break;
    case "computing-and-it":
      computingDiv.style.display = "block";
      break;
    case "sciences":
      sciencesDiv.style.display = "block";
      break;
    case "actuarial-science-accountancy-mathematics-economics-statistics":
      actuarialDiv.style.display = "block";
      break;
    case "medicine-health-veterinary-medicine":
      medicineDiv.style.display = "block";
      break;
    case "education":
      educationDiv.style.display = "block";
      break;
    default:
    // If the selected value is not one of the expected values, show an error message
    console.error("Unexpected value selected in courses trend dropdown: " + selectedValue);
    break;
    }
  }
);

