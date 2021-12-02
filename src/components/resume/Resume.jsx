/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import './Resume.css'
import Product from '../product/Product'
import { resume } from '../../data'

const ResumeList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Work Experience</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {resume.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} title ={item.title} />
        ))}
      </div>
    </div>
  )
}

export default ResumeList
