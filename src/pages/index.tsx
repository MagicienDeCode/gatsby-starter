import { Button } from 'antd'
import { Link } from 'gatsby'
import React from 'react'

export default function Index() {
  return (
    <div>
      <h1>Hello World</h1>

      <Button>
        <Link to="/example">Example</Link>
      </Button>
    </div>
  )
}
