import React from 'react'
import Card  from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user='Aman Singh' age={18} img="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhcnRvb258ZW58MHx8MHx8fDA%3D"/>
      <Card user='Aman Singh' age={21} img="https://images.unsplash.com/photo-1639628735078-ed2f038a193e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcnRvb258ZW58MHx8MHx8fDA%3D"/>
      <Card user='Aman Singh' age={23} img="https://images.unsplash.com/photo-1744451658473-cf5c564d5a37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNhcnRvb258ZW58MHx8MHx8fDA%3D"/>

    
    </div>
  )
}

export default App
