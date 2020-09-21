import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Input, 
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import IndexNavbar from '../../components/Navbar/IndexNavbar';
import SpecInput from '../../components/Specs/SpecInput';
import { listingsURL, loggedIn, parseJSON } from '../../helpers/requestHelper';

const Sell = (props) => {

  const [specsInput, addSpecInput] = useState([<SpecInput key={Date.now()}/>])
  const [user, setUser] = useState({})
  const history = useHistory()
  const form = useRef(null)

  useEffect(() => {
    setUser(loggedIn())
  }, [])

  const submit = (event) => {
    event.preventDefault();
    const formData = new FormData(filterForm(form.current))

    fetch(listingsURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: formData
    })
      .then(parseJSON)
      .then(response => history.push(`/shop/${response.id}`))
  }

  const filterForm = (form) => {
    const $specKeys = document.querySelectorAll('#specKeyInput');
    const $specValues = document.querySelectorAll('#specValueInput');

    for(let i = 0; i < $specKeys.length; i++) {
      $specKeys[i].name = `specs[${$specKeys[i].value}]`;
      $specKeys[i].value = $specValues[i].value;
    }
  
    return form;
  }

  return (
    <>
      <IndexNavbar navbarDefault="" />
      <div className="separator separator-primary" style={{height: '80px'}}></div> 
      <Container className="py-5">
        <form id="form-create-listing" className="text-right" ref={form} onSubmit={submit}>
          <h1 className="h3 mb-3 font-weight-normal text-left">Sell your gear!</h1>
          <div className="form-group row">
            <label className="col-sm-1 px-1" htmlFor="brandInput">Brand</label>
            <Input className="form-control col-sm-8" type="text" name="brand" id="brandInput" placeholder="ex. Evil, Yeti, Armada, or Salomon" required></Input>
          </div>
          <div className="form-group row">
            <label htmlFor="yearInput" className="col-sm-1 px-1">Year</label>
            <Input type="select" name="year" id="yearInput" className="form-control col-sm-3" required>
              <option defaultValue>Choose...</option>
              <option value={2000}>2000</option>
              <option value={2001}>2001</option>
              <option value={2002}>2002</option>
              <option value={2003}>2003</option>
              <option value={2004}>2004</option>
              <option value={2005}>2005</option>
              <option value={2006}>2006</option>
              <option value={2007}>2007</option>
              <option value={2008}>2008</option>
              <option value={2009}>2009</option>
              <option value={2010}>2010</option>
              <option value={2011}>2011</option>
              <option value={2012}>2012</option>
              <option value={2013}>2013</option>
              <option value={2014}>2014</option>
              <option value={2015}>2015</option>
              <option value={2016}>2016</option>
              <option value={2017}>2017</option>
              <option value={2018}>2018</option>
              <option value={2019}>2019</option>
              <option value={2020}>2020</option>
            </Input>
            <label htmlFor="gearTypeInput" className="col-sm-2">Type</label>
            <Input type="select" name="gear_type" id="gearTypeInput" className="form-control col-sm-3" required>
              <option defaultValue>Choose...</option>
              <option value="Mountain Bike">Mountain Bike</option>
              <option value="Road Bike">Road Bike</option>
              <option value="Skis">Skis</option>
            </Input>
          </div>
          <div className="form-group row">
            <label htmlFor="sizeInput" className="col-sm-1">Size</label>
            <input type="text" name="size" id="sizeInput" className="form-control col-sm-3" placeholder="ex. Small, Large, 165cm, or 188cm" required></input>
            <label htmlFor="conditionInput" className="col-sm-2">Condition</label>
            <Input type="select" name="condition" id="conditionInput" className="form-control col-sm-3" required>
              <option defaultValue>Choose...</option>
              <option value="New">New</option>
              <option value="Used - Excellent">Used - Excellent</option>
              <option value="Used - Good">Used - Good</option>
              <option value="Used - Okay">Used - Okay</option>
            </Input>
          </div>
          <div className="form-group row">
            <label htmlFor="msrpInput" className="col-sm-1">MSRP</label>
            <InputGroup className="col-sm-3 p-0">
              <InputGroupAddon addonType="prepend">
                <InputGroupText className="px-2">{'$'}</InputGroupText>
              </InputGroupAddon>
              <Input type="text" name="msrp" id="msrpInput" className="form-control" placeholder="ex. $5,200 or $699" required></Input>
              <InputGroupAddon addonType="append">
                <InputGroupText  className="px-2"> .00</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <label htmlFor="priceInput" className="col-sm-2">Price</label>
            <div className="input-group col-sm-3 p-0">
              <div className="input-group-prepend">
                <span className="input-group-text px-2">$ </span>
              </div>
              <Input type="text" name="price" id="priceInput" className="form-control" placeholder="ex. $3,500 or $400" required></Input>
              <div className="input-group-append">
                <span className="input-group-text px-2"> .00</span>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-1">Images</div>
            <div className="custom-file col-sm-8">
              <Input type="file" name="images" className="custom-file-input form-control" id="imagesInput" multiple={true}></Input>
              <label className="custom-file-label text-left" htmlFor="imagesInput">Choose file</label>
              <small id="imagesHelp" className="form-text text-muted">You must upload at least one image</small>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-1"></div>
            <label htmlFor="specsInput" className="col-sm-8 text-center pt-4">Specifications</label>
            <div className="col-1">
              <button id="add-spec-input" className="btn-sm btn-outline-secondary" type="button" value="+" onClick={(event) => {
                event.preventDefault();
                addSpecInput([...specsInput, <SpecInput key={Date.now()} />])
              }}>+</button>
            </div>
          </div>
          <div className="form-group row-cols-1 row-cols-md-9">
            {specsInput}
          </div>
          <div className="form-group row">
            <div className="col-sm-1"></div>
            <label htmlFor="descriptionInput" className="col-sm-8 text-center pt-4">Description</label>
          </div>
          <div className="form-group row">
            <div className="col-sm-1"></div>
            <textarea type="text" name="description" id="descriptionInput" className="form-control col-sm-8" style={{height: '200px'}} placeholder="ex. Serious powder skis! or"></textarea>
          </div>
          <div className="form-group row">
            <div className="col-sm-8 offset-sm-1 text-center">
              <button id="submit-button" className="btn btn-lg btn-primary btn-block" type="submit">Sell It!</button>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Sell;