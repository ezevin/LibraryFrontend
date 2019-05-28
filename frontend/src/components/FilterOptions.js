import React from 'react'
import { Search, Form, Grid } from 'semantic-ui-react'

class FilterOptions extends React.Component {

  state = {
    value: "",
    filters: "",
    search: true,
    filteredBooks: []
  }

  handleChange = (e, {value}) => {
    this.setState({ value }, console.log(e.target.value))
  }

filtered = (e) => {
    this.setState({value: e.target.value})
  }

  render(){
    const { value } = this.state.value
    // console.log(value);

    // console.log(this.props.books);
    // const filtered = this.props.books.filter(book => {
      // return book.genre === value
    // })
    return (
      <>
        <center>
          <h2 className="color">Search By Title:</h2>
            <Search width={15} onSearchChange={this.props.onSearchChange} showNoResults={false} />
          <h2 className="color">Sort By:</h2>
        </center>
        <Grid className="">
          <Grid.Column width={9} className="">

              <h3 className="color">Genre:</h3>


                <Form>
                  <Form.Field  width={8}>
                    <select onChange={this.props.genres}>
                      <option value="null" ></option>
                      {
                        this.props.books.map(book =>
                          <option key={book.id} value={book.genre}>{book.genre}</option>)
                      }
                    </select>
                  </Form.Field>
                </Form>

            </Grid.Column>
            <Grid.Column width={7} className="">
              <Form>
              <span className="color">Title:          </span>
              <input  type="radio" value="Titles" checked={value === 'Titles'} onChange={this.props.titles}
                />
              <span className="color">Author:          </span>
              <input type="radio" value="Authors" checked={value === 'Authors'} onChange={this.props.authors}/>
            </Form>
        </Grid.Column>
      </Grid>
    </>
    )
  }
}

export default FilterOptions
