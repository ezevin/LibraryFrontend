import React from 'react'

class FilterAuthors extends React.Component {

  state = {
    filters: "all"
  }
  filterOptions = () => {

  }

  render(){
    console.log(this.props);
    return (
          <div>
            <select onChange={this.filterOptions} >
              <option value="all">new crap</option>
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="genre">Genre</option>
            </select>
          </div>
    )
  }
}

export default FilterAuthors
