import { NextPage } from "next"
import courses from "../../constants/courses"
import { CourseInterface } from "../../types/Post"
import InfoCard from "../InfoCardCopy"

const CourseList: NextPage = () => {
  return (
    <div className="py-5 containerless-layout grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, index) => {
        const { name, title, description, socials, image, width, height }: CourseInterface = course
        console.log(socials.homepage)
        return <InfoCard image={image} key={title}
          name={name}
          title={title}
          description={
            description
          }
          socials={{ homepage: socials.homepage }}
          width={width}
          height={height} />
      })}
    </div>
  )
}


export default CourseList

