import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import { AlbumsContainer } from "./Albums/AlbumsContainer";

const rootElement = document.getElementById("root");
render(<AlbumsContainer />, rootElement);
