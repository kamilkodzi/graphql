# Small GraphQL implementation

1. 'npm i' 
2. 'npm start'
3. open 'http://localhost:4000/graphql' in the browser

## Some queries:
`
{
  books{
    name
  }
}
`

`
{
  books{
    name
    author{
      name
    }
  }
}
`

`
mutation{
  addAuthor(name:"New Author Rowling II"){
    id
    name
  }
}
`