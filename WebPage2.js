import React, { useState } from 'react';
import './wp2style.css'
import { Popover, PopoverBody, PopoverHeader, Button, UncontrolledPopover } from 'reactstrap';
import { Form, FormGroup, Input, Label, your, proxy, port } from 'reactstrap';
import axios from 'axios'
// const [your,setyour] = useState(false)





function WebPage2(args) {
  const [isOpen, setIsOpen] = useState(false);

  const [Popover, setPopover] = useState(false)
  const [formdata, setFormdata] = useState({
    email: '',
    password: ''
  })
  const handleInput = (e) => {
    const { name, value } = e.target
    setFormdata({
      ...formdata,
      [name]: value
    })
  }
  console.log(formdata)
  const toggle = (e) => {
    // e.preventDefault();
    setPopover(!Popover);
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.get(`http://localhost:5001/login/${formdata.email}/${formdata.password}`)
      console.log(res)

    }
    catch (err) {
      throw err
    }
  }

  return (
    <main style={contentStyle}>
      <section style={incontentStyle}>
        <div style={incontentstyle1}>
          <h2>
            Hi,there welcome To
          </h2>
          <h2>
            QuantumCode learning
          </h2>
          <h2>
            skilsOn_
            <span></span>
          </h2>
          <div>
            <div>
              <Button
                id="UncontrolledPopover"
                type="button"
              >
                GET STARTED
              </Button>
              <UncontrolledPopover
                placement="bottom"
                target="UncontrolledPopover"
              >
                <PopoverHeader >
                  login
                </PopoverHeader>
                <PopoverBody>
                  <>
                    <Form onSubmit={handleSubmit}>
                      <FormGroup floating>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="Email"
                          type="email"
                          value={formdata.email}
                          onChange={handleInput}
                          required
                        />
                        <Label for="exampleEmail">
                          Email
                        </Label>
                      </FormGroup>
                      {' '}
                      <FormGroup floating>
                        <Input
                          id="examplePassword"
                          name="password"
                          placeholder="Password"
                          type="password"
                          value={formdata.password}
                          onChange={handleInput}
                          required
                        />
                        <Label for="examplePassword">
                          Password
                        </Label>
                      </FormGroup>
                      {' '}
                      <Button type='submit'>
                        Submit
                      </Button>
                    </Form>
                  </>
                </PopoverBody>
              </UncontrolledPopover>
            </div>
          </div>
        </div>
      </section>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0069ff" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,133.3C672,96,768,64,864,48C960,32,1056,32,1152,32C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </main>

  );

}
const contentStyle = {
  padding: 69
};

const incontentStyle = {
  padding: 45
}

const incontentstyle1 = {
  padding: 20
}
const buttonspace = {
  margin: 20
}

export default WebPage2;