import React from 'react'
import CustomButton from '../components/CustomButton'

function News() {
    const newsArticle = {
        title : 'A theft',
        author: 'Author name',
        date: '22nd October 2024',
        time: '4:00 PM',
        description: 'this was a dummy description '
    }
    const name = "Akshay"
    //{} to print it
  return (
    <div>
        <h1>This is news page</h1>
        <CustomButton cr='white' bgColor='purple' name='News Button' />
        <CustomButton cr='white' bgColor='brown' name='Another Button' />
        <p>{newsArticle.title}</p>
        <p>{newsArticle.time}</p>
    </div>
  )
}

export default News

//create one table
// name: Akshay
// Emp_id : 5610
// Organization : CloudThat
// postion: Corporate Trainer
// email id: akshayr@cloudthat.com