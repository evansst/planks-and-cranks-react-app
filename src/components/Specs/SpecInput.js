import React from 'react';
import { Input } from 'reactstrap';

const SpecInput = () => {
  return (
    <div className="row">
    <label htmlFor="specKeyInput" className="col-sm-1">Spec</label>
    <Input  type="text" name="" id="specKeyInput" className="form-control col-sm-3" placeholder="ex. Fork or Bindings" required></Input>
    <label htmlFor="specValueInput" className="col-sm-2">Value</label>
    <Input type="text" name="" id="specValueInput" className="form-control col-sm-3" placeholder="ex. Fox Float 36 or Look Pivot 12" required></Input>

    <div className="w-100 p-2"></div>
  </div>
  );
};

export default SpecInput;