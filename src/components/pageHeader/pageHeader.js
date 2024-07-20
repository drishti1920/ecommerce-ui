import React from 'react'
import classes from "./pageHeader.module.css"

const PageHeader = ({pagename}) => {
  return (
    <div className={classes.HeadingSection}>
      <h2>{pagename}</h2>
      
    </div>
  )
}

export default PageHeader