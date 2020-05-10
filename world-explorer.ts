import { PopulationService, PopulationServiceImpl } from "./src/services";
import { WorldExplorerHTMLView, WorldExplorerView } from "./src/views";
import { WorldExplorerController } from "./src/controllers/world-explorer-controller.in";
import { WorldExplorerControllerImpl } from "./src/controllers/world-explorer-controller";

console.log("WorldExplorer - Loading..");
const populationService: PopulationService = new PopulationServiceImpl(
  "https://api.worldbank.org"
);

const view: WorldExplorerView = new WorldExplorerHTMLView();
const controller: WorldExplorerController = new WorldExplorerControllerImpl(
  populationService,
  view
);

interface CustomWindow extends Window {
  WorldExplorerController?: WorldExplorerController;
}

const customwindow: CustomWindow = window;
customwindow.WorldExplorerController = controller;
