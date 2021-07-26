import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable';

export class SelectSearch extends Component {
  
  render() {
    return (
      <CreatableSelect
        isClearable
        isMulti
        name="colors"
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' }
        ]}
      />
    );
  }
}