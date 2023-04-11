import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

import { HomeProject } from "./homeProject/HomeProject"
import { UiProjects } from "../../data/UiProjects"
import { DevProjects } from "../../data/DevProjects"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";
import { Link } from "react-router-dom"


export function HomeProjects(){
  const { skill, toggle } = useContext(SkillContext)
  const  mapping = (skill ? UiProjects : DevProjects)
  const options = [
    {value: 'Dev Projects', text: ''}
  ]

  return(
    <Container>
      <div className="header">
        <div className="title">
          <i className="ri-arrow-left-s-line" onClick={toggle}/>

          <h1>{!skill ? "Dev Portofolio" : "Ui Portofolio"}</h1>
          <i className="ri-arrow-right-s-line" onClick={toggle}/>
        </div>
        <a href="/portofolio">
          <Link to="/portofolio">
            <span>See All</span>
          </Link>
        </a>
      </div>
      <div className="display">
        {mapping?.map((item, index) => (
          <HomeProject 
            key={index}
            img={item.img}
            title={item.title} 
          />
        ))}
      </div>
    </Container>
  )
}
