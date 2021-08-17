import react from 'react'

class Field extends react.Component {
    state = {
        value: ""
    }
    handdleChange (event) {
        let newValue;
        if (this.props.value) {
            newValue = this.props.value;
        } else {
            newValue = event.target.value;
        }
        if (this.props.onChange) {
            this.props.onChange(event, newValue);
        }
        this.setState({value: newValue});
    }
    render () {
        return <div className="field">
            <div className="label">{this.props.label}</div>
            <input type={this.props.type} class="input-field" name={this.props.name ? this.props.name : this.props.label.split(" ")} value={this.props.value ? this.props.value : this.state.value} onChange={this.handdleChange.bind(this)} />
        </div>
    }
}
export default Field;
