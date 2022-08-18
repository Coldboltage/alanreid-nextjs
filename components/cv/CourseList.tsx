import { NextPage } from "next"
import courses from "../../constants/courses"
import InfoCard from "../InfoCard"

const CourseList: NextPage = () => {
  return (
    <div className="containerless-layout sm:px-36 grid gap-4 grid-cols-3 grid-rows-3">
      {courses.map((course, index) => {
        const {name, title, description, socials, image} = course
        console.log(socials.homepage)
        return <InfoCard image={image}
        name={name}
        title={title}
        description={
          description
        }
        socials={{homepage: socials.homepage}}
        width={969} 
        height={1280}/>
      })}
    </div>
  )
}

export default CourseList

