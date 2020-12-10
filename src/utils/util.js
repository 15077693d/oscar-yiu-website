import { Box } from "@material-ui/core"
import React from 'react'
const createAt2ChineseData = (createAt) => {
    let strDate = createAt.split('T')[0]
    const [year, month, day] = strDate.split('-')
    return `${year}年${month}月${day}日`
}

const createBlogGroups = (page, numOfBlogEachPage, blogElements, classes) => {
    blogElements = blogElements.slice(page * numOfBlogEachPage, (page + 1) * numOfBlogEachPage)
    let blogGroupElements = []
    for (let i = 0; i < blogElements.length / 2; i++) {
        let startIndex = i * 2
        let blogGroupElement = blogElements.slice(startIndex, startIndex + 2)
        if (blogGroupElement.length === 1) {
            blogGroupElements.push(<Box key={`blog_group_${i}`} className={classes.blogGroup}>{[blogElements[startIndex], <Box key="blog_empty" className={classes.emptyBlog} />]}</Box>)
        } else {
            blogGroupElements.push(<Box key={`blog_group_${i}`} className={classes.blogGroup}>{blogGroupElement}</Box>)
        }
    }
    return blogGroupElements
}
export { createAt2ChineseData, createBlogGroups };