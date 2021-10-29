// import { Component } from 'react';

// class Hello extends Component {
//   constructor() {
//     super()

//     this.name = "Jimmy"
//   }

//   render() {
//     return <h1> Hello {this.name}! </h1>
//   }
// }

// export default Hello


//CONVERT TO FUNCTION 

// import { Component } from 'react'

// class BookList extends Component {
//   constructor() {
//     super()

//     this.titles = ["moby dick", "the great gatsby", "of mice and men"]
//   }
//   render() {
//     return (
//       <ul className="book-titles">
//         {this.titles.map(title => <li>{title}</li>)}
//       </ul>
//     )
//   }
// }

// export default BookList


// function BookList () {
//   const titles = ["moby dick", "the great gatsby", "of mice and men"]
//   return (
//     <ul className="book-titles">
//       {this.titles.map(title => <li>{title}</li>)}
//     </ul>
//   )
// }

// export default BookList

//CONVERT TO CLASS COMPONENT

// function Card() {
//   const cardTitle = "Song Info"
//   const author = "Andrew Bird"
//   const songTitle = "Danse Caribe"
//   const description = "A wonderful song off of the album 'Break it yourself'"

//   return (
//     <div className="card">
//       <h1 className="card-title">{cardTitle}</h1>
//       <h2 className="author-title">{author} - {songTitle}</h2>
//       <p>{description}</p>
//     </div>
//   )
// }

// export default Card


import { Component } from "react";

class Card extends Component {
  constructor() {
    super()
    this.cardTitle = "Song Info"
    this.author = "Andrew Bird"
    this.songTitle = "Danse Caribe"
    this.description = "A wonderful song off of the album 'Break it yourself'"
  }

  render() {
    return (
    <div className="card">
      <h1 className="card-title">{this.cardTitle}</h1>
      <h2 className="author-title">{this.author} - {this.songTitle}</h2>
      <p>{this.description}</p>
    </div>   
    )
  }

}

export default Card 