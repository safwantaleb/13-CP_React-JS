import "./App.css";
import { Button, Form, Col, Nav, Navbar, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <a href="#home">
          <img
            src="https://pa1.narvii.com/6688/7f88acff0eab1db69d924603db483676f76b9d1f_hq.gif"
            style={{ width: 70, marginTop: -12 }}
            alt="pic"
          />
        </a>

        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          <Button variant="outline-success">
            <b>Sign In</b>
          </Button>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>

      <header>
        <div className="App-header">
          <div className="bckimg"></div>
          <br></br>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
            <Form.Text className="text-muted">
              We'll never share your email or any other information with anyone
              else.
            </Form.Text>
            <Form.Group controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control placeholder="+216 xx xxx xxx" />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Tunis</option>
                  <option>Sousse</option>
                  <option>Sfax</option>
                  <option>Gafsa</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Motivation</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write here!" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridFile">
              <Form.Label>Import your CV</Form.Label>
              <Form.File id="exampleFormControlFile1" />
            </Form.Group>

            <Form.Group as={Col} id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="danger" type="reset">
              Reset
            </Button>
          </Form>
          <br></br>
        </div>
      </header>

      <div className="d-flex flex-column">
        <footer className="footer">
          <div>
            <a href="https://www.linkedin.com/in/safwan-taleb/">MyBio</a>
            <span>&copy; 2021 creative_Labs.</span>
          </div>
          <div className="ml-auto">
            <span>
              Powered by
              <i>
                <b> Safwan TALEB</b>
              </i>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
