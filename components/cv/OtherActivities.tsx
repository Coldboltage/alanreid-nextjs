import React from 'react'
import {SingleAct} from "./SingleAct"
import Image from "next/image"
import CodewarsImage from "/public/assets/codewars.jpg"
import { NextComponentType } from 'next'

const OtherActivities = () => {
  return (
    <div className="py-5 containerless-layout grid gap-6">
      {/* Clickable buttons */}
      <div className="bg-neutral-800 p-5 flex flex-col gap-5">
        <div className='flex'>
          <Image alt="Codewars" width="100px" height="50px" src={CodewarsImage} className="cursor-pointer"/>
        </div>
        <SingleAct site="codewars" title="Codewars" data={{user: "https://www.codewars.com/api/v1/users/Coldboltage"}}/>
      </div>


    </div>
  )
}

export default OtherActivities