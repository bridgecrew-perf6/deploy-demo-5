import React, { Component } from 'react'
import Title from './Title'
import {FaDumbbell, FaCocktail, FaCampground} from 'react-icons/fa'
import {GiBoatFishing} from 'react-icons/gi'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaDumbbell/>,
                title:"Inbuilt gym",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,em"
            },
            {
                icon:<FaCocktail/>,
                title:"Inbuilt mini-bar ",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,em"
            },
            {
                icon:<FaCampground/>,
                title:"Campfire",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,em"
            },
            {
                icon:<GiBoatFishing/>,
                title:"Go Fishing",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,em"
            }
        ]
    }

  render() {
    return (
      <section className="services">
          <Title title="Services"/>
          <div className="services-center">
              {this.state.services.map((item, index) => {
                  return <article key={index} className="service">
                      <span>{item.icon}</span>
                      <h6>{item.title}</h6>
                      <p>{item.info}</p>
                  </article>
              })}
          </div>
      </section>
    )
  }
}
