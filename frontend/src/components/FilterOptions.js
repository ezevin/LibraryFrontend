import React from 'react'
import { Search, Form, Reveal, Grid } from 'semantic-ui-react'

import FilterTitles from './FilterTitles'

class FilterOptions extends React.Component {

  state = {
    value: "",
    filters: "",
    search: true
  }

  handleChange = (e, {value}) => {
    this.setState({ value }, console.log(e.target.value))
  }

  handleFilter = (e) => {
    let value = e.target.value
    this.props.books.filter(book => {
    if (value === book.genre){
      console.log(book)
      return book
    }})
  }

  render(){

    const { value } = this.state

    return (
      <>
        <center>
          <br />
          <Form>
            <p className="color">Search By Title:</p>
            <Search onSearchChange={this.props.onSearchChange} showNoResults={false} />
          </Form>
        </center>
        <center>
        <br />
        <div className="color">Sort by:</div><br />
          <Form>
            <Grid>
              <Grid.Row columns={2}>
               <Grid.Column width={8}>
                 <label>
                  <span className="color">Title:     </span>
                   <input  type="radio" value="Titles" checked={value === 'Titles'} onChange={this.props.titles}
                   onClick={this.handleTitleSearch}/>
                 </label>
                 <label>
                 <a>   </a>
                 <span className="color">Author:     </span>
                   <input type="radio" value="Authors" checked={value === 'Authors'} onChange={this.props.authors}/>

                 </label>
                 <br/>
              </Grid.Column>
                <Grid.Column  >
                    <span className="color">Genre:     </span>
                  <Form.Field >
                    <select onChange={this.props.filter}>
                        <option value="null" width={6}></option>
                      {
                        this.props.books.map(book =>
                          <option value={book.genre}>{book.genre}</option>)
                      }
                    </select>
                    <Form.Button color="black">Submit</Form.Button>
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </center>
        </>

    )
  }
}

export default FilterOptions
