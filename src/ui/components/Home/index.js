import React from "react";
import Heading from "@tds/core-heading";
import { Switch, Link, WillMatch, Redirect, Route } from "react-router-dom";

const Home = () => (
  <>
    <div>
      <Heading level="h1">Device Catalogue</Heading>
      <nav>
        <ul>
          <li>
            <Link to="/watches">Watches</Link>
          </li>
          <li>
            <Link to="/iphones">iPhones</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
);

export default Home;
