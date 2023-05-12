import { gridItemSelected } from "./hide_selected_gridItem.js";
import {saveRequest} from "./request_data.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    saveRequest(['info', 'message'], '.success');
    gridItemSelected(['.grid-container', '.grid-items']);
})