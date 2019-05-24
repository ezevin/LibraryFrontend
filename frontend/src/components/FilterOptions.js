import React from 'react'
import { Search, Form } from 'semantic-ui-react'

import FilterTitles from './FilterTitles'
import FilterAuthors from './FilterAuthors'
import FilterGenres from './FilterGenres'

class FilterOptions extends React.Component {

  state = {
    value: "",
    filters: ""
  }

  handleChange = (e, {value}) => {
    this.setState({ value }, console.log(e.target.value))
  }

  handleFilter = (e) => {
    this.props.books.map(book => {
      if(e.target.value === book.genre)
      console.log(book);
      return  book
    })
  }

  render(){

    const { value } = this.state
    const options = [
      { key: '1', text: 'Fantasy', value: 'Fantasy' },
      { key: '2', text: 'Science', value: 'Science' },
      { key: '3', text: 'Classic', value: 'Classic' },
    ]

    if(this.state.filters === "Fantasy"){
      console.log("yeppers");
    }else if (this.state.filters === "author"){
      return <FilterAuthors authors={()=> console.log("boo")}/>
    }else if (this.state.filters === "genre"){
      return <FilterGenres authors={()=> console.log("boo")}/>
    }

    /*<Search onSearchChange={this.props.handleSearch} showNoResults={false} />*/
    return (
      <>
          <br />
            <Form>
             <Form.Group inline>
               <strong>Sort by:</strong>
                 <label>
                   <input type="radio" value="Titles" checked={value === 'Titles'} onChange={this.props.titles}/>
                   Title
                 </label>
                 <label>
                   <input type="radio" value="Authors" checked={value === 'Authors'} onChange={this.props.authors}/>
                   Author
                 </label>
                 <br/>
             </Form.Group>
              <select onChange={() => this.handleFilter()}>
                <option value="All">Genre</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Sportswear">Sportswear</option>
                <option value="Finance">Finance</option>
              </select>
             <Form.Button>Submit</Form.Button>
            </Form>
        </>

    )
  }
}

export default FilterOptions
