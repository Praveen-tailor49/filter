import DataTable from 'react-data-table-component';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import Ex from './Ex'
function App() {

  const [value, setValue] = useState()
  // console.log(value);

  const [searchValue, setSearchValue] = useState()
  const filter = [
    { first: 'John', last: 'Doe', year: 1991, month: 6 },
    { first: 'Jane', last: 'Doe', year: 1990, month: 9 },
    { first: 'Jahn', last: 'Deo', year: 2986, month: 1 },
    { first: 'Jone', last: 'Deo', year: 2992, month: 11 },
    { first: 'Jhan', last: 'Doe', year: 4989, month: 4 },
    { first: 'Jeon', last: 'Doe', year: 3992, month: 2 },
    { first: 'Janh', last: 'Edo', year: 6984, month: 7 },
    { first: 'Jean', last: 'Edo', year: 9981, month: 8 },
  ];

  const columns = [
    {
      name: 'first',
      selector: (row) => row.first,
      sortable: true
    },
    {
      name: 'last',
      selector: (row) => row.last
    },
    {
      name: 'year',
      selector: (row) => row.year,
      sortable: true
    },
    {
      name: 'month ',
      selector: (row) => row.month,
      sortable: true
    }
  ]

  const getfilter = (value) => {
    setValue('')
    if (value === 'Contains') {
      setValue(filter)
    }
    if (value === 'Does not Contain') {

    }
    if (value === 'is equal to') {
      // alert(searchValue)
      const filtered2 = filter.filter((p) => {
        return p.first === searchValue;
      });
      console.log(filtered2);
      setValue(filtered2)
    }
    if (value === 'is not equal to') {
      const filtered2 = filter.filter((p) => {
        return p.first !== searchValue;;
      });
      setValue(filtered2)
    }
    if (value === 'End with') {
      var filtered1 = filter.filter(p => String(p.first).endsWith(searchValue));
      setValue(filtered1)
    }
    if (value === 'Starts With') {
      var filtered = filter.filter(p => String(p.first).startsWith(searchValue));
      setValue(filtered)
    }
  }

  return (
    <div style={{ maxWidth: '100%' }}>
      <Ex value ={value}/>
      <DataTable
        columns={columns}
        data={value}
        pagination
        // selectableRows
        // selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <>
            <div className="col-12 pl-0 ml-0">
              <div className="row">
                <div className="col-4">
                  <input type="text" onChange={(e) => setSearchValue(e.target.value)} className='form-control' placeholder='Search By Incident ID ...' />
                </div>
                <div className='col-1' style={{ width: '4.333333%', marginLeft: '-23px' }}>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      F
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => getfilter('Contains')}>Contains</Dropdown.Item>
                      <Dropdown.Item onClick={() => getfilter('Does not Contain')}>Does not Contain </Dropdown.Item>
                      <Dropdown.Item onClick={() => getfilter('is equal to')}>is equal to</Dropdown.Item>
                      <Dropdown.Item onClick={() => getfilter('is not equal to')}>is not equal to </Dropdown.Item>
                      <Dropdown.Item onClick={() => getfilter('Starts With')}>Starts With</Dropdown.Item>
                      <Dropdown.Item onClick={() => getfilter('End with')}>End with</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </>
        }
        subHeaderAlign='left'
      />
    </div>

  );
}

export default App;
