import { InputGroup,FormControl } from 'react-bootstrap';

export default function Input({label, value, inputChange}) {
  return (
    <div className="col-12 d-flex justify-content-center">
        <InputGroup className="mb-3 w-25">
            <InputGroup.Text id="basic-addon1">{label}</InputGroup.Text>
            <FormControl
            placeholder="Enter Input"
            aria-label={label}
            aria-describedby="basic-addon1"
            onChange={(e)=> inputChange(e)}
            value={value || ''}
            />
        </InputGroup>
    </div>
  );
}