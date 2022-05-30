import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context";
export default class SingleRoom extends Component {
  

  render() {
    
    return (
      <div>Hello from Singleroom page!</div>
    )
  }
}
