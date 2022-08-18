import { NextPage } from "next"
import courses from "../../constants/courses"
import InfoCard from "../InfoCard"

const CourseList: NextPage = () => {
  return (
    <div className="containerless-layout sm:px-36 grid gap-4 grid-cols-3 grid-rows-3">
      {courses.map((course, index) => {
        return <></>
      })}
    </div>
  )
}

export default CourseList

